import { invokeMy } from '../invoke';

/**
 * 选择文件
 */
export default function chooseFile(options: { count?: number; type?: number }): Promise<{ apFilePaths: string[] }> {
  return invokeMy({ type: 'qn.chooseFile', data: options });
}
