import invokeSyncApi from './utils/invokeSyncApi';
/**
 * 获取服务器时间
 */
export default function getServerTime(): Promise<{ time: number }> {
  return invokeSyncApi('getServerTime');
}
