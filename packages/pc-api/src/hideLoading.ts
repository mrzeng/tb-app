import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 隐藏加载提示
 */
export default function hideLoading(options?: { page?: unknown }): Promise<{ success: boolean }> {
  return invokeAsyncApi('hideLoading', options);
}
