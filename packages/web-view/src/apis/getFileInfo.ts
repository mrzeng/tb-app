import wrapInvoke from '../utils/invoke';

/**
 * 获取文件信息
 */
export default function getFileInfo(options: { apFilePath: string; digestAlgorithm?: 'md5' | 'sha1' }): Promise<{
  size: number;
  createTime: number;
}> {
  return wrapInvoke({ type: 'getFileInfo', data: options });
}
