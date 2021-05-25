import wrapInvoke from '../utils/invoke';

/**
 * 选择文件
 */
export default function chooseFile(options: { count?: number; type?: number }): Promise<{ apFilePaths: string[] }> {
  return wrapInvoke({ type: 'chooseFile', data: options });
}
