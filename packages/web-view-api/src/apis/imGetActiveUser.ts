import wrapInvoke from '../utils/invoke';

/**
 * 获取当前IM旺旺联系人
 */
export default function imGetActiveUser(): Promise<{
  user_nick: string;
}> {
  return wrapInvoke({ type: 'imGetActiveUser' });
}
