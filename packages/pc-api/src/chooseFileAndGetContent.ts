import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 打开文件并获取内容
 */
export default function chooseFileAndGetContent(options?: { count?: number; type?: number }): Promise<{ fileContentMap: unknown }> {
  return invokeAsyncApi('qn.chooseFileAndGetContent', options);
}
