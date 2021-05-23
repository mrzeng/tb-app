import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 清除三方授权token
 */
export default function cleanToken(): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.cleanToken');
}
