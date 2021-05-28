import { invokeMy } from '../invoke';

/**
 * 保存文件到本地
 */
export default function saveFile(options: { apFilePath: string }): Promise<{ apFilePath: string }> {
  return invokeMy({ type: 'saveFile', data: options });
}
