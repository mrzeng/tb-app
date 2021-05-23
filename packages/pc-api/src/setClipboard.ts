import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 设置剪贴板数据
 */
export default function setClipboard(options: { text: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('setClipboard', options);
}
