import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 文件上传
 */
export default function downloadFile(options: { url: string; header: unknown }): Promise<{ apFilePath: string }> {
  return invokeAsyncApi('downloadFile', options);
}
