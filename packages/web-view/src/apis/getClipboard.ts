import wrapInvoke from '../utils/invoke';

/**
 * 获取剪贴板数据
 */
export default function getClipboard(): Promise<{ text: string }> {
  return wrapInvoke({ type: 'getClipboard' });
}
