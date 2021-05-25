import wrapInvoke from '../utils/invoke';

/**
 * 保存文件到本地
 */
export default function saveFile(options: { apFilePath: string }): Promise<{ apFilePath: string }> {
  return wrapInvoke({ type: 'saveFile', data: options });
}
