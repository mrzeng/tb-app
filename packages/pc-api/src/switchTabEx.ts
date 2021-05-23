import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 切换左侧导航条选中项
 */
export default function switchTabEx(options: { id: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.switchTabEx', options);
}
