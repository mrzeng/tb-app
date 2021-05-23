import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 获取文件信息
 */
export default function getFileInfo(options: { apFilePath: string; digestAlgorithm?: 'md5' | 'sha1' }): Promise<{
  size: number;
  createTime: number;
}> {
  return invokeAsyncApi('getFileInfo', options);
}
