import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 选择文件
 */
export default function chooseFile(options: { count?: number; type?: number }): Promise<{ apFilePaths: string[] }> {
  return invokeAsyncApi('qn.chooseFile', options);
}
