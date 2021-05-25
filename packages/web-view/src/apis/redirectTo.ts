import wrapInvoke from '../utils/invoke';
/**
 * 关闭当前页面，跳转到应用内的某个指定页面
 */
export default function redirectTo(options: { url: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'redirectTo', data: options });
}
