import { invokeMy } from '../invoke';

/**
 * 隐藏弱提示
 */
export default function hideToast(): Promise<{ success: boolean }> {
  return invokeMy({ type: 'hideToast' });
}
