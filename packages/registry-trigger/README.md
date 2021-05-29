# `@tb-app/registry-trigger`

## 简介

这是一个用于淘宝小程序与 web-view 通信的库。且只能在**小程序端**使用。

**web-view 端** 使用 @tb-app/web-view-api 暴露的各个 api,即可使用小程序提供的原生 api 功能。

## 安装

```js
yarn add @tb-app/registry-trigger
// 或
npm i @tb-app/registry-trigger
```

## 提供了以下 API

### registry(type:string,callback:Function)

registry 用于在小程序端注册事件，该事件是由 web-view 端触发的。

**参数介绍**

- type: 事件的名称
- callback: 当事件触发时的回调函数, 参数是 web-view 端传递的数据

```js
// 小程序端
import { registry, trigger } from '@tb-app/registry-trigger;
const localWebViewId = 'local';

registry('greet', (options) => {
  return `${option.name}你好`
});

Page({
  localWebView: null,
  data: {
    localWebViewId,
  },
  onLoad() {
    this.localWebView = my.createWebViewContext(localWebViewId);
  },
  onWebViewMessage({ detail: { value } }) {
    trigger(value, this.localWebView)
  },
});
```

```js
// webview 端
import { invoke } from '@tb-app/web-view-api';
invoke({
  type: 'greet',
  data: {
    name: '德米朵夫',
  },
});
```

### trigger(param:Object,webViewContext:WebViewContext)

trigger 在 web-view 组件的 onMessage 事件处理器内使用。用于触发 web-view 端发送的消息事件。

这个 api 必须使用，否则无法处理到 web-view 端发过来的消息。

**参数介绍**

- param: web-view 端传递给来的数据，该值来自小程序组件 webview 的 onMessage 事件处理函数
- webViewContext: web-view 组件上下文，由 my.createWebViewContext 得到

```js
// 小程序端代码
Page({
  localWebView: null,
  data: {
    localWebViewId,
  },
  onLoad() {
    this.localWebView = my.createWebViewContext(localWebViewId);
  },
  onWebViewMessage({ detail: { value } }) {
    trigger(value, this.localWebView);
  },
});
```
