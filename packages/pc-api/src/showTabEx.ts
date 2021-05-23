import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 显示左侧导航栏中指定的菜单项
 */
export default function showTabEx(options: { id: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.showTabEx', options);
}
