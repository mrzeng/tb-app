import wrapInvoke from '../utils/invoke';

/**
 * 文件上传
 */
export default function downloadFile(options: { url: string; header: unknown }): Promise<{ apFilePath: string }> {
  return wrapInvoke({ type: 'downloadFile', data: options });
}
