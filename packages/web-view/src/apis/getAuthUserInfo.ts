import wrapInvoke from '../utils/invoke';

/**
 * 获取用户信息
 */
export default function getAuthUserInfo(): Promise<{
  nickName: string;
  avatar: string;
}> {
  return wrapInvoke({ type: 'getAuthUserInfo' });
}
