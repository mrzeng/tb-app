import wrapInvoke from '../utils/invoke';

/**
 * 获取保存的文件信息
 */
export default function getSavedFileInfo(options: { apFilePath: string }): Promise<{ size: number; createTime: number }> {
  return wrapInvoke({ type: 'getSavedFileInfo', data: options });
}
