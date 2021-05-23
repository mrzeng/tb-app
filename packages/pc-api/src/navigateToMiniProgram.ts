import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 跳转到其他小程序
 */
export default function navigateToMiniProgram(options: { appId: string; path?: string; extraData: unknown }): Promise<{ success: boolean }> {
  return invokeAsyncApi('navigateToMiniProgram', options);
}
