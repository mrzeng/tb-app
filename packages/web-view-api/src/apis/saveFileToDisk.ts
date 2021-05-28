import { invokeMy } from '../invoke';

/**
 * 保存文件到磁盘
 */
export default function saveFileToDisk(options: { apFilePath: string; defaultFileName?: string }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'qn.saveFileToDisk', data: options });
}
