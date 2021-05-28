import { invokeMy } from '../invoke';

/**
 * 获取保存的所有文件信息
 */
export default function getSavedFileList(): Promise<{
  fileList: { size: number; createTime: number; apFilePath: string }[];
}> {
  return invokeMy({ type: 'getSavedFileList' });
}
