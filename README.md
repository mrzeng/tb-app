# tb-app

提供了一些开发淘宝小程序的 package，减少项目的重复工作。

## 现在有如下包可供使用

### [@tb-app/pc-api](https://github.com/noshower/tb-app/tree/main/packages/pc-api)

使用 TS 重新定义淘宝 PC 小程序的 api, 并将异步 API 改成 Promise 形式。

**注意**：只能在 PC 端小程序使用。当然，手机端小程序很多 API 和 PC 一样

#### 特点

- 支持 TypeScript
- 所有异步的 api 都换成了 Promise 的形式
- 入参和原 api 保持不变，只是去掉了 success、fail、complete 这三个方法。
- 所有 API 名字与官方保持一致
- ES 模块

### [@tb-app/pub-sub](https://github.com/noshower/tb-app/tree/main/packages/pub-sub)

这是一个基于 JavaScript 的发布订阅库。可以同时在小程序和 web-view 中使用。

#### 特点

- 零依赖
- 支持 TypeScript
- ES 模块

### [@tb-app/web-view](https://github.com/noshower/tb-app/tree/main/packages/web-view) 已废弃

这是一个用于淘宝小程序与 web-view 通信的库, 同时还提供了 web-view 调用小程序 api 的简易方式。

该包**已废弃**，推荐使用 @tb-app/registry-trigger 和 @tb-app/web-view-api

#### 特点

- 支持 TypeScript
- ES 模块
- 支持 小程序与 web-view 之间的并发通信
- 支持一次注册所有小程序 API
- 依赖 @tb-app/pc-api 和 @tb-app/pub-sub

### [@tb-app/registry-trigger](https://github.com/noshower/tb-app/tree/main/packages/registry-trigger)

这是一个专门用于小程序端的库，需要与 @tb-app/web-view-api 配合使用。

#### 特点

- 支持 TypeScript
- ES 模块
- 支持 小程序与 web-view 之间的并发通信
- 支持一次注册所有小程序 API

### [@tb-app/web-view-api](https://github.com/noshower/tb-app/tree/main/packages/web-view-api)

这是一个专门用于 web-view 端的库，需要与 @tb-app/registry-trigger 配合使用。

#### 特点

- 支持 TypeScript
- ES 模块
- 支持 小程序与 web-view 之间的并发通信
- 支持直接使用小程序 API
