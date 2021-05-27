import wrapInvoke from '../utils/invoke';

/**
 * 保存文件到磁盘
 */
export default function saveFileToDisk(options: { apFilePath: string; defaultFileName?: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'saveFileToDisk', data: options });
}
