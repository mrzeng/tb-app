import { invokeMy } from '../invoke';
/**
 * 小程序跳转到QAP
 */
export default function navigateToQAP(options: { url: string; title?: string; query?: unknown }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'qn.navigateToQAP', data: options });
}
