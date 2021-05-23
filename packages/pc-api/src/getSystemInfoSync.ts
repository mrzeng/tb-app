import invokeSyncApi from './utils/invokeSyncApi';

/**
 * 获取手机系统信息的同步接口
 */
export default function getSystemInfoSync(): {
  model: string;
  pixelRatio: number;
  windowWidth: number;
  windowHeight: number;
  language: string;
  version: string;
  storage: string;
  currentBattery: string;
  system: string;
  platform: string;
  titleBarHeight: number;
  statusBarHeight: number;
  screenWidth: number;
  screenHeight: number;
  brand: string;
  fontSizeSetting: number;
  app: string;
} {
  return invokeSyncApi('getSystemInfoSync');
}
