import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 保存文件到磁盘
 */
export default function saveFileToDisk(options: { apFilePath: string; defaultFileName?: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.saveFileToDisk', options);
}
