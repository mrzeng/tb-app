import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 用于获取当前小程序的运行版本
 */
export default function getRunScene(): Promise<{
  envVersion: string;
}> {
  return invokeAsyncApi('getRunScene');
}
