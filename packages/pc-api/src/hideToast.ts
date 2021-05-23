import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 隐藏弱提示
 */
export default function hideToast(): Promise<{ success: boolean }> {
  return invokeAsyncApi('hideToast');
}
