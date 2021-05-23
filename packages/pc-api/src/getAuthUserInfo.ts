import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 获取用户信息
 */
export default function getAuthUserInfo(): Promise<{
  nickName: string;
  avatar: string;
}> {
  return invokeAsyncApi('getAuthUserInfo');
}
