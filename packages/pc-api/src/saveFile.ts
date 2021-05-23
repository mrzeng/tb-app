import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 保存文件到本地
 */
export default function saveFile(options: { apFilePath: string }): Promise<{ apFilePath: string }> {
  return invokeAsyncApi('saveFile', options);
}
