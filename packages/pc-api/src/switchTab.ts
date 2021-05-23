import invokeAsyncApi from './utils/invokeAsyncApi';
/**
 * 跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面
 */
export default function switchTab(options: { url: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('switchTab', options);
}
