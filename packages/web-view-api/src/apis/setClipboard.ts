import { invokeMy } from '../invoke';

/**
 * 设置剪贴板数据
 */
export default function setClipboard(options: { text: string }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'setClipboard', data: options });
}
