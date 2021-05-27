import wrapInvoke from '../utils/invoke';

/**
 * 弹出子账号授权框
 */
export default function showSubAccountAuth(options: { api: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'showSubAccountAuth', data: options });
}
