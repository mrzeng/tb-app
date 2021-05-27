import wrapInvoke from '../utils/invoke';

/**
 * 打开聊天
 */
export default function openChat(options: { nick: string; text?: string }): Promise<{
  nickName: string;
  avatar: string;
}> {
  return wrapInvoke({ type: 'openChat', data: options });
}
