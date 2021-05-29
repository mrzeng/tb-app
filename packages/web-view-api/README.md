# `@tb-app/web-view-api`

## 简介

**@tb-app/web-view-api** 提供了直接使用小程序 api 的能力，且只能在 **web-view 端**使用。 此外，**小程序端**必须引入 **@tb-app/registry-trigger**。

## 安装

```js
yarn add @tb-app/web-view-api
// 或
npm i @tb-app/web-view-api
```

## 主要 API 介绍

### invoke(options:Object)

invoke 用于调用**小程序端**注册的功能，可以向小程序传递数据

**参数介绍**

- options 对象，有 type 和 data 两个属性。其中 type 属性值，对应**小程序端**注册的事件名称。data 是 **web-view 端**提供给**小程序端**事件的数据。

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

```js
// 小程序端
import { registry, trigger } from '@tb-app/registry-trigger';

registry('greet', (options) => {
  return `${option.name}你好`;
});

const localWebViewId = 'local';
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

### listen(type:string, callback:Function)

listen 用于监听指定名称的事件，该事件由**小程序端**主动触发。 小程序端发送的数据格式如下：

```js
{
  type: string,
  data: any,
  success: boolean,
}
```

在 web-view 端，invoke 是主动向小程序获取数据，而 listen 是被动接收小程序端的数据。

```js
//web-view 端
import { listen } from '@tb-app/web-view-api';

listen('greet', function (res) {
  console.log(res);
});
```

```js
// 小程序端
import { trigger } from '@tb-app/registry-trigger';

const localWebViewId = 'local';
Page({
  localWebView: null,
  data: {
    localWebViewId,
  },
  onLoad() {
    this.localWebView = my.createWebViewContext(localWebViewId);
    // 每隔两秒向 web-view 端发送数据
    setInterval(() => {
      this.localWebView.postMessage({
        type: 'greet',
        data: 'hello world',
        success: true,
      });
    }, 2000);
  },
  onWebViewMessage({ detail: { value } }) {
    trigger(value, this.localWebView);
  },
});
```

### removeListen(type:string)

removeListen 用于取消监听。

**参数介绍**

- type: 要取消监听的事件名称

### invokeMy(options:object)

invokeMy 可以调用小程序 my 下的 api。

例如：

```js
import { invokeMy } from '@tb-app/registry-trigger';
// 使用my.alert
invokeMy({
  type: 'alert',
  data: options,
});
// 使用 my.qn.openChat
invokeMy({ type: 'qn.openChat', data: options });
```

invokeMy 主要用于已经存在于 my,但@tb-app/web-view-api 没有提供的 api 。这些 api,往往是新增的。

### invokeCloud(options:object)

invokeMy 可以调用小程序 cloud 下的 api。

例如：

```js
import { invokeCloud } from '@tb-app/registry-trigger';

invokeCloud({ type: 'file.getTempFileURL', data: options });
```

### cloud

cloud 与 @tbmp/mp-cloud-sdk 包提供的 cloud 具有相同的 api,可以在 **web-view 端** 使用。

```js
import { cloud } from '@tb-app/registry-trigger';

cloud.file.uploadFile({
  filePath: 'xxx',
  fileType: 'image',
  fileName: 'xxx.jpg',
});
```

### httpRequest

httpRequest 可以在 **web-view 端** 请求数据。

```js
import { httpRequest, cloud } from '@tb-app/registry-trigger';

cloud.init({
  env: 'test',
});

const onClick = function () {
  httpRequest({
    path: 'xxx',
    method: 'Get',
  });
};
```

### 所有 API 如下：

```js
export {
  alert,
  authorize,
  canIUse,
  changePrice,
  chooseFile,
  chooseFileAndGetContent,
  chooseImage,
  cleanToken,
  clearStorage,
  clearStorageSync,
  closeQAP,
  cloud,
  compressImage,
  confirm,
  database,
  downloadFile,
  exit,
  getAuthUserInfo,
  getClipboard,
  getExtConfig,
  getExtConfigSync,
  getFileInfo,
  getImageInfo,
  getNetworkType,
  getRunScene,
  getSavedFileInfo,
  getSavedFileList,
  getServerTime,
  getStorage,
  getStorageInfo,
  getStorageInfoSync,
  getStorageSync,
  getSystemInfo,
  getSystemInfoSync,
  hideLoading,
  hideTabBar,
  hideTabBarRedDot,
  hideTabBarRedDotEx,
  hideTabEx,
  hideToast,
  httpRequest,
  imGetActiveUser,
  invoke,
  invokeCloud,
  invokeMy,
  listen,
  navigateBack,
  navigateTo,
  navigateToMiniProgram,
  navigateToQAP,
  navigateToWebPage,
  openCategory,
  openChat,
  openPlugin,
  previewImage,
  queryDBSize,
  reLaunch,
  redirectTo,
  removeListen,
  removeSavedFile,
  removeStorage,
  removeStorageSync,
  removeTabBarBadge,
  removeTabBarBadgeEx,
  rsa,
  saveFile,
  saveFileToDisk,
  saveImage,
  sdkVersion,
  setClipboard,
  setStorage,
  setStorageSync,
  setTabBarBadge,
  setTabBarBadgeEx,
  setTabBarItem,
  showLoading,
  showSubAccountAuth,
  showTabBar,
  showTabBarRedDot,
  showTabBarRedDotEx,
  showTabEx,
  showToast,
  switchTab,
  switchTabEx,
  uploadFile,
};
```
