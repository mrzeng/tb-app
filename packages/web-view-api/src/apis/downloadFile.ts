import { invokeMy } from '../invoke';

/**
 * 文件上传
 */
export default function downloadFile(options: { url: string; header: unknown }): Promise<{ apFilePath: string }> {
  return invokeMy({ type: 'downloadFile', data: options });
}
