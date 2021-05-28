import { invokeMy } from '../invoke';

/**
 * 获取剪贴板数据
 */
export default function getClipboard(): Promise<{ text: string }> {
  return invokeMy({ type: 'getClipboard' });
}
