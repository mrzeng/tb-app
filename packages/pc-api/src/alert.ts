import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 警告框:可以设置警告框的标题、内容、按钮文字等，暂不支持设置图片等样式
 */
export default function alert(options?: { title?: string; content?: string; buttonText?: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('alert', options);
}
