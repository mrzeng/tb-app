import invokeAsyncApi from './utils/invokeAsyncApi';
/**
 * 获取服务器时间
 */
export default function getServerTime(): Promise<{ time: number }> {
  return invokeAsyncApi('getServerTime');
}
