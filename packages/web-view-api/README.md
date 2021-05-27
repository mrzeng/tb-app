# `@tb-app/web-view`

## 简介

这是一个用于淘宝小程序与 web-view 通信的库, 同时还提供了 web-view 调用小程序 api 的简易方式。

## 安装

```js
yarn add @tb-app/web-view
// 或
npm i @tb-app/web-view
```

## 注意：

web-view 端，html 中必须引入下面的 js

```
<script src="https://appx/web-view.min.js"></script>
```

## 特点

- 支持 TypeScript
- 支持 ES 模块
- 支持 小程序与 web-view 之间的并发通信
- 支持一键注册所有小程序 API

## API 介绍

#### registry(type:string,callback:Function)

registry API 只能在**小程序端**使用，用于在小程序端注册事件监听。与 trigger 配合使用。

**参数介绍**

- **type**: 事件的名称
- **callback**: 当事件触发时的回调函数

```js
// 小程序端
import { registry, trigger } from '@tb-app/web-view';

const localWebViewId = 'local';

registry('getStorage', (options) => {
  my.getStorage(options);
});

Page({
  localWebView: null,
  data: {
    localWebViewId,
  },
  onWebViewMessage({ detail: { value } }) {
    trigger(value, localWebViewId);
  },
});
```

```js
// webview 端
import { invoke } from '@tb-app/web-view';

invoke({
  type: 'getStorage',
  data: {
    key: 'name',
  },
});
```

---

#### autoRegistry()

autoRegistry API 只能在**小程序端**使用，用于一次性注册所有小程序 API 供 webview 端使用（不包含事件监听和获取上下文之类 API）。 webview 端可以使用与 my 下同名的 api

```js
// 小程序端
// app.js
import { autoRegistry } from '@tb-app/web-view';

autoRegistry();
```

```js
// 小程序端
import { trigger } from '@tb-app/web-view';

const localWebViewId = 'local';

Page({
  localWebView: null,
  data: {
    localWebViewId,
  },
  onWebViewMessage({ detail: { value } }) {
    trigger(value, localWebViewId);
  },
});
```

```js
// webview 端
import { getStorage } from '@tb-app/web-view';

getStorage({ key: 'name' });
```

#### trigger(param:Object,webViewId:string)

trigger API 只能在**小程序端**的使用，用于触发 web-view 指定的事件。与 registry 配合使用。

**参数介绍**

- **param**: web-view 端传递给来的数据，该值来自小程序组件 webview 的 onMessage 事件处理函数
- **webViewId**: 小程序组件 webview 的 id。

---

#### invoke(options:Object)

invoke API 只能在 **web-view 端** 使用，用于调用小程序端注册好的功能。

**参数介绍**

- **options** 对象，有 type 和 data 两个属性。其中 type 属性值，对应小程序端注册的事件名称。data 是 web-view 端提供给小程序端事件的数据。

---

#### listen(type:string, callback:Function)

listen API 只能在 **web-view 端** 使用，用于监听指定名称的事件。 使用场景：小程序端触发了某件事，需要通知 web-view 执行某项操作（使用 postMessage 向 web-view 传递数据）。

在 web-view 端，invoke 是主动向小程序获取数据，而 listen 是被动接收小程序端的数据。

**参数介绍**

- **type**: 事件的名称
- **callback**: 当事件触发时的回调函数

---

#### removeListen(type:string)

removeListen API 只能在 **web-view 端** 使用，用于取消监听。

**参数介绍**

- **type**: 要取消监听的事件名称

---

#### 其他与 my 下面同名的 api

这些 API 只能在 **web-view** 端使用，并且使用时，小程序端必须配合才能使用（需要使用 autoRegistry 和 trigger）。

```js
// web-view 端
import { chooseImage, compressImage, saveImage, 等等 } from '@tb-app/web-view';
// 这些API 与 my.xxx api 入参基本一致，只不过不需要再传了 success 、fail、complete
```
