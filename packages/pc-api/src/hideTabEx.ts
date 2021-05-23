import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 隐藏左侧导航栏中指定的菜单项
 */
export default function hideTabEx(options: { id: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.hideTabEx', options);
}
