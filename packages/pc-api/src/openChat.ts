import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 打开聊天
 */
export default function openChat(options: { nick: string; text?: string }): Promise<{
  nickName: string;
  avatar: string;
}> {
  return invokeAsyncApi('qn.openChat', options);
}
