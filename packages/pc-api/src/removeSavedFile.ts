import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 删除某个保存的文件
 */
export default function removeSavedFile(options: { apFilePath: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('removeSavedFile', options);
}
