import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 获取剪贴板数据
 */
export default function getClipboard(): Promise<{ text: string }> {
  return invokeAsyncApi('getClipboard');
}
