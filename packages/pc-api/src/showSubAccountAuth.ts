import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 弹出子账号授权框
 */
export default function showSubAccountAuth(options: { api: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.showSubAccountAuth', options);
}
