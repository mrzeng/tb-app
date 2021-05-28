import { invokeMy } from '../invoke';
/**
 * 关闭插件页面
 */
export default function closeQAP(): Promise<{ success: boolean }> {
  return invokeMy({ type: 'qn.closeQAP' });
}
