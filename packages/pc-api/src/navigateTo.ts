import invokeAsyncApi from './utils/invokeAsyncApi';
/**
 * 保留当前页面，跳转到应用内的某个指定页面
 */
export default function navigateTo(options: { url: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('navigateTo', options);
}
