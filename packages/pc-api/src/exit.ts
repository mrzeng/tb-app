import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 退出当前小程序
 */
export default function exit(): Promise<{ success: boolean }> {
  return invokeAsyncApi('exit');
}
