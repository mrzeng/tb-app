import wrapInvoke from '../utils/invoke';

/**
 * 获取保存的所有文件信息
 */
export default function getSavedFileList(): Promise<{
  fileList: { size: number; createTime: number; apFilePath: string }[];
}> {
  return wrapInvoke({ type: 'getSavedFileList' });
}
