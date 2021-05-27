import wrapInvoke from '../utils/invoke';
/**
 * 获取服务器时间
 */
export default function getServerTime(): Promise<{ time: number }> {
  return wrapInvoke({ type: 'getServerTime' });
}
