// 应用级事件
export { default as onAppShow } from './onAppShow';
export { default as offAppShow } from './offAppShow';
export { default as onAppHide } from './onAppHide';
export { default as offAppHide } from './offAppHide';
export { default as onError } from './onError';
export { default as offError } from './offError';
export { default as onWindowResized } from './onWindowResized';

// 路由
export { default as switchTab } from './switchTab';
export { default as reLaunch } from './reLaunch';
export { default as redirectTo } from './redirectTo';
export { default as navigateTo } from './navigateTo';
export { default as navigateBack } from './navigateBack';
export { default as navigateToWebPage } from './navigateToWebPage';
export { default as navigateToQAP } from './navigateToQAP';
export { default as closeQAP } from './closeQAP';

// TabBar
export { default as showTabBar } from './showTabBar';
export { default as hideTabBar } from './hideTabBar';
export { default as setTabBarItem } from './setTabBarItem';
export { default as showTabBarRedDot } from './showTabBarRedDot';
export { default as hideTabBarRedDot } from './hideTabBarRedDot';
export { default as setTabBarBadge } from './setTabBarBadge';
export { default as removeTabBarBadge } from './removeTabBarBadge';
export { default as switchTabEx } from './switchTabEx';
export { default as showTabEx } from './showTabEx';
export { default as hideTabEx } from './hideTabEx';
export { default as showTabBarRedDotEx } from './showTabBarRedDotEx';
export { default as hideTabBarRedDotEx } from './hideTabBarRedDotEx';
export { default as setTabBarBadgeEx } from './setTabBarBadgeEx';
export { default as removeTabBarBadgeEx } from './removeTabBarBadgeEx';

// 交互反馈
export { default as alert } from './alert';
export { default as confirm } from './confirm';
export { default as showToast } from './showToast';
export { default as hideToast } from './hideToast';
export { default as showLoading } from './showLoading';
export { default as hideLoading } from './hideLoading';

// 动画
export { default as createAnimation } from './createAnimation';

// 画布
export { default as createCanvasContext } from './createCanvasContext';

// 图片
export { default as chooseImage } from './chooseImage';
export { default as compressImage } from './compressImage';
export { default as saveImage } from './saveImage';
export { default as previewImage } from './previewImage';
export { default as getImageInfo } from './getImageInfo';

// 视频
export { default as createVideoContext } from './createVideoContext';

// 音频
export { default as createInnerAudioContext } from './createInnerAudioContext';

// 数据库
export { default as queryDBSize } from './queryDBSize';
export { default as database } from './database';
export { default as onDatabaseLimitWarning } from './onDatabaseLimitWarning';
export { default as onDatabaseLimitDebug } from './onDatabaseLimitDebug';

// 文件
export { default as getFileInfo } from './getFileInfo';
export { default as saveFile } from './saveFile';
export { default as getSavedFileInfo } from './getSavedFileInfo';
export { default as getSavedFileList } from './getSavedFileList';
export { default as removeSavedFile } from './removeSavedFile';

export { default as chooseFile } from './chooseFile';
export { default as chooseFileAndGetContent } from './chooseFileAndGetContent';
export { default as saveFileToDisk } from './saveFileToDisk';

// 缓存
export { default as clearStorage } from './clearStorage';
export { default as clearStorageSync } from './clearStorageSync';
export { default as getStorage } from './getStorage';
export { default as getStorageInfo } from './getStorageInfo';
export { default as getStorageInfoSync } from './getStorageInfoSync';
export { default as getStorageSync } from './getStorageSync';
export { default as removeStorage } from './removeStorage';
export { default as removeStorageSync } from './removeStorageSync';
export { default as setStorage } from './setStorage';
export { default as setStorageSync } from './setStorageSync';

// 网络
export { default as uploadFile } from './uploadFile';
export { default as downloadFile } from './downloadFile';

// canIUse
export { default as canIUse } from './canIUse';

// 获取基础库版本号
export { default as sdkVersion } from './sdkVersion';

// 系统信息
export { default as getSystemInfoSync } from './getSystemInfoSync';
export { default as getSystemInfo } from './getSystemInfo';

// 网络状态
export { default as getNetworkType } from './getNetworkType';
export { default as onNetworkStatusChange } from './onNetworkStatusChange';
export { default as offNetworkStatusChange } from './offNetworkStatusChange';

// 剪切板
export { default as setClipboard } from './setClipboard';
export { default as getClipboard } from './getClipboard';

// 获取服务器时间
export { default as getServerTime } from './getServerTime';

// 用户授权
export { default as authorize } from './authorize';
export { default as cleanToken } from './cleanToken';
export { default as showSubAccountAuth } from './showSubAccountAuth';

// 获取授权用户信息
export { default as getAuthUserInfo } from './getAuthUserInfo';

// IM 功能
export { default as openChat } from './openChat';
export { default as imGetActiveUser } from './imGetActiveUser';

// 打开千牛组件
export { default as openPlugin } from './openPlugin';
export { default as openCategory } from './openCategory';
export { default as changePrice } from './changePrice';

// 小程序跳转
export { default as navigateToMiniProgram } from './navigateToMiniProgram';

// 退出当前小程序
export { default as exit } from './exit';

// webview组件控制
export { default as createWebViewContext } from './createWebViewContext';

// 数据安全
export { default as rsa } from './rsa';

// 小程序当前运行版本类型
export { default as getRunScene } from './getRunScene';

// 自定义分析
export { default as reportAnalytics } from './reportAnalytics';

// 模板实例化
export { default as getExtConfig } from './getExtConfig';
export { default as getExtConfigSync } from './getExtConfigSync';
