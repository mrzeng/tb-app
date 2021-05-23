# `@tb-app/pc-api`

## 简介

使用 TS 重新定义淘宝**PC**小程序的 api, 并将异步 API 改成 Promise 形式。

## 安装

```js
yarn add @tb-app/pc-api
// 或
npm i @tb-app/pc-api
```

## 特点

- 支持 TypeScript
- 所有异步的 api 都换成了 Promise 的形式
- 官方开发者工具中支持鼠标上移显示函数的定义
- 入参和原 api 保持不变，只是去掉了 success、fail、complete 这三个方法。
- 所有 API 名字与官方保持一致

## 注意

小程序 PC 端 API 的官方文档描述不一定准确，以实际的调用为准。 使用过程中，如有疑问，可以先使用原生 API 试试。

## 例子

```js
import { alert } from '@tb-app/pc-api';

alert({ title: '你好', content: '我是个demo', buttonText: 'OK' });
```
