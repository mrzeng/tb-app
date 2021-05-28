import { invokeMy } from '../invoke';

/**
 * 跳转到其他小程序
 */
export default function navigateToMiniProgram(options: { appId: string; path?: string; extraData: unknown }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'navigateToMiniProgram', data: options });
}
