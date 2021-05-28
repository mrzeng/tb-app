import { invokeMy } from '../invoke';

/**
 * 获取当前IM旺旺联系人
 */
export default function imGetActiveUser(): Promise<{
  user_nick: string;
}> {
  return invokeMy({ type: 'qn.imGetActiveUser' });
}
