import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 发起用户授权
 */
export default function authorize(options: { scopes: string }): Promise<{
  authSuccessScope: string;
  // accessToken: string;
  //  authErrorScope: Error
}> {
  return invokeAsyncApi('authorize', options);
}
