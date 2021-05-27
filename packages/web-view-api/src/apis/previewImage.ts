import wrapInvoke from '../utils/invoke';

/**
 * 预览图片
 */
export default function previewImage(options: { urls: string[]; current?: number }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'previewImage', data: options });
}
