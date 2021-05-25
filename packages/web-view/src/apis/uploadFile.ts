import wrapInvoke from '../utils/invoke';

/**
 * 文件上传
 */
export default function uploadFile<T = unknown>(options: {
  url: string;
  fileType: string;
  fileName: string;
  filePath: string;
  header: unknown;
  formData: unknown;
}): Promise<T> {
  return wrapInvoke({ type: 'uploadFile', data: options });
}
