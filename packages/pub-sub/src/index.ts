import warning from './utils/warning';
import { generateToken, isToken } from './utils/token';
import hasOwnProperty from './utils/hasOwnProperty';

type Callback = (name: string, data: any) => any;

let callbacks: Record<string, Record<string, Callback>> = {};

function assertName(name: string) {
  if (typeof name !== 'string') {
    warning(`Expected the name to be a string ,Instead, received:'${typeof name}'`);
  }
  if (isToken(name)) {
    warning(`token:'${name}' is not allowed as name`);
  }
}

function assertCallback(callback: Callback) {
  if (typeof callback !== 'function') {
    warning(`Expected the callback to be a function,Instead, received:'${typeof callback}'`);
  }
}

/**
 * 订阅消息。同一个消息名称可以关联多个回调函数
 * @param name
 * @param callback
 * @returns 返回token, 用于取消订阅
 */
function subscribe(name: string, callback: Callback): string {
  assertName(name);
  assertCallback(callback);
  // 这里使用 hasOwnProperty 判断 name 是否已经订阅， 目的是防止当 name 的值为 Object 原型上的属性值时而导致判断出错
  if (!hasOwnProperty(callbacks, name)) {
    callbacks[name] = {};
  }
  const token = generateToken();
  callbacks[name][token] = callback;
  return token;
}

/**
 * 发布。根据 name 触发响应的注册回调
 * @param name
 * @param data
 * @returns
 */
function publish(name: string, data?: any): boolean {
  assertName(name);
  let result = false;
  if (hasOwnProperty(callbacks, name)) {
    Object.values(callbacks[name]).forEach((callback) => {
      result = true;
      callback(name, data);
    });
  }
  return result;
}

/**
 * 根据消息名称清除订阅
 * @param name
 */
function clearSubscriptions(name: string): void {
  if (hasOwnProperty(callbacks, name)) {
    delete callbacks[name];
  }
}

/**
 * 根据消息名称，取得所有订阅
 * @param name
 */
function getSubscriptions(name: string): Callback[] {
  if (hasOwnProperty(callbacks, name)) {
    return Object.values(callbacks[name]);
  }
  return [];
}

/**
 * 取消订阅
 * @param name 值可以是名称，token 和回调函数
 */
function unsubscribe(name: string | Callback): boolean {
  if (typeof name !== 'string' && typeof name !== 'function') {
    warning(`Expected the name to be a string or function,Instead, received:'${typeof name}'`);
  }

  if (typeof name === 'function') {
    const maps = Object.values(callbacks);
    let result = false;
    for (let i = 0; i < maps.length; i += 1) {
      const map = maps[i];
      const keys = Object.keys(map);
      for (let j = 0; j < keys.length; j += 1) {
        const key = keys[j];
        if (map[key] === name) {
          delete map[key];
          result = true;
        }
      }
    }
    return result;
  }

  if (isToken(name)) {
    const maps = Object.values(callbacks);
    for (let i = 0; i < maps.length; i += 1) {
      const m = maps[i];
      if (hasOwnProperty(m, name)) {
        return delete m[name];
      }
    }
  } else if (hasOwnProperty(callbacks, name)) {
    return delete callbacks[name];
  }

  return false;
}

/**
 * 清除所有订阅
 */
function clearAllSubscriptions(): void {
  callbacks = {};
}

/**
 * 订阅消息，但是相同的消息名称，只能订阅一次
 * @param name
 * @param callback
 */
function subscribeOnlyOne(name: string, callback: Callback) {
  assertName(name);
  assertCallback(callback);
  if (hasOwnProperty(callbacks, name)) {
    warning(`name:'${name}' is subscribed`);
  }
  subscribe(name, callback);
}

/**
 * 订阅消息，但是回调只会触发一次
 * @param name
 * @param callback
 */
function subscribeOnce(name: string, callback: Callback): void {
  const token = subscribe(name, function wrapCallback(n, data) {
    unsubscribe(token);
    callback(n, data);
  });
}

export { subscribe, publish, clearSubscriptions, unsubscribe, clearAllSubscriptions, getSubscriptions, subscribeOnlyOne, subscribeOnce };
