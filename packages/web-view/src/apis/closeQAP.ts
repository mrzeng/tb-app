import wrapInvoke from '../utils/invoke';
/**
 * 关闭插件页面
 */
export default function closeQAP(): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'qn.closeQAP' });
}
