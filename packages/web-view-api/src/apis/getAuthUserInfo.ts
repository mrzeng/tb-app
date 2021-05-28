import { invokeMy } from '../invoke';

/**
 * 获取用户信息
 */
export default function getAuthUserInfo(): Promise<{
  nickName: string;
  avatar: string;
}> {
  return invokeMy({ type: 'getAuthUserInfo' });
}
