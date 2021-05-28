import { invokeMy } from '../invoke';

/**
 * 获取保存的文件信息
 */
export default function getSavedFileInfo(options: { apFilePath: string }): Promise<{ size: number; createTime: number }> {
  return invokeMy({ type: 'getSavedFileInfo', data: options });
}
