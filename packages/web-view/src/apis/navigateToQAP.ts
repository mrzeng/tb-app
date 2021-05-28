import wrapInvoke from '../utils/invoke';
/**
 * 小程序跳转到QAP
 */
export default function navigateToQAP(options: { url: string; title?: string; query?: unknown }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'qn.navigateToQAP', data: options });
}
