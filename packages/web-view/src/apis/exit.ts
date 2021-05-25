import wrapInvoke from '../utils/invoke';

/**
 * 退出当前小程序
 */
export default function exit(): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'exit' });
}
