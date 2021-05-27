import wrapInvoke from '../utils/invoke';

/**
 * 隐藏弱提示
 */
export default function hideToast(): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'hideToast' });
}
