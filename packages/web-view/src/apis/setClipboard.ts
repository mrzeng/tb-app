import wrapInvoke from '../utils/invoke';

/**
 * 设置剪贴板数据
 */
export default function setClipboard(options: { text: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'setClipboard', data: options });
}
