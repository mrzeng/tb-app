import { invokeMy } from '../invoke';

/**
 * 打开聊天
 */
export default function openChat(options: { nick: string; text?: string }): Promise<{
  nickName: string;
  avatar: string;
}> {
  return invokeMy({ type: 'qn.openChat', data: options });
}
