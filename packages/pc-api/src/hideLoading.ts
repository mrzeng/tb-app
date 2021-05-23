import invokeSyncApi from './utils/invokeSyncApi';

/**
 * 隐藏加载提示
 */
export default function hideLoading(options?: { page?: unknown }): { success: boolean } {
  return invokeSyncApi('hideLoading', options);
}
