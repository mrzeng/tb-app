import { invokeMy } from '../invoke';

/**
 * 切换左侧导航条选中项
 */
export default function switchTabEx(options: { id: string }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'qn.switchTabEx', data: options });
}
