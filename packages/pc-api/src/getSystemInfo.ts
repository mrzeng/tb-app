import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 获取手机系统信息
 */
export default function getSystemInfo(): Promise<{
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
}> {
  return invokeAsyncApi('getSystemInfo');
}
