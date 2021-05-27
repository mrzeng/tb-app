import wrapInvoke from '../utils/invoke';

/**
 * 跳转到其他小程序
 */
export default function navigateToMiniProgram(options: { appId: string; path?: string; extraData: unknown }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'navigateToMiniProgram', data: options });
}
