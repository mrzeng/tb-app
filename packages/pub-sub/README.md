# `@tb-app/pub-sub`

## 简介

这是一个基于 JavaScript 的发布订阅库。

## 安装

```js
yarn add @tb-app/pub-sub
// 或
npm i @tb-app/pub-sub
```

## 特点

- 零依赖
- 支持 TypeScript
- 支持 ES 模块

## API

#### subscribe(name,callback)

订阅名称为 name 的消息，并返回字符串 token。token 可以用来取消产生此 token 的订阅

```js
import { subscribe, unsubscribe } from '@tb-app/pub-sub';
const callback = function (name, data) {
  console.log(name, data);
};
const token = subscribe('say', callback);
// 可以通过 token 取消订阅
unsubscribe(token);
```

#### publish(name,data)

发布名称为 name 的消息，并返回布尔值。true, 表示成功触发指定消息的回调。 false, 要触发的消息不存在或消息没有回调。

```js
import { subscribe, publish } from '@tb-app/pub-sub';
const callback = function (name, data) {
  console.log(name, data);
};
const token = subscribe('say', callback);

setTimeout(() => {
  publish('say', 'hello !');
}, 1000);
```

#### clearSubscriptions(name)

清除指定名称的消息订阅

```js
import { subscribe, clearSubscriptions } from '@tb-app/pub-sub';
const callback = function (name, data) {
  console.log(name, data);
};
subscribe('say', callback);

setTimeout(() => clearSubscriptions('say'), 1000);
```

#### unsubscribe(name)

清除指定的名称或 token 或函数对应的订阅。返回结果为布尔值，true 表示成功取消订阅。false，表示取消失败（订阅不存在）。

```js
import { subscribe, unsubscribe } from '@tb-app/pub-sub';
const callback = function (name, data) {
  console.log(name, data);
};
const token = subscribe('say', callback);

setTimeout(() => {
  // 通过消息名称取消订阅
  unsubscribe('say');
  //  通过 token 取消订阅
  //  unsubscribe(token);
  // 通过函数取消订阅
  unsubscribe(callback);
}, 1000);
```

#### clearAllSubscriptions

清除所有订阅

```js
clearAllSubscriptions();
```

#### getSubscriptions(name)

得到指定名称消息的所有回调函数数组

```js
import { subscribe, unsubscribe } from '@tb-app/pub-sub';
const callback = function (name, data) {
  console.log(name, data);
};
subscribe('say', callback);
// 返回 [callback]
getSubscriptions('say');
```

#### subscribeOnlyOne(name,callback)

订阅消息，但是相同的消息名称，只能订阅一次

```js
import { subscribeOnlyOne } from '@tb-app/pub-sub';
const callback = function (name, data) {
  console.log(name, data);
};
subscribeOnlyOne('say', callback);
// 下面代码将会报错
// subscribeOnlyOne('say', callback);
```

#### subscribeOnce

订阅消息，但是回调只会被调用一次，即调用后会立即取消订阅

```js
import { subscribeOnce } from '@tb-app/pub-sub';
const callback = function (name, data) {
  console.log(name, data);
};
subscribeOnce('say', callback);
setTimeout(() => {
  publish('say', 'hello !');
  // 第二次 publish 不会触发 callback
  publish('say', 'hello !');
}, 1000);
```
