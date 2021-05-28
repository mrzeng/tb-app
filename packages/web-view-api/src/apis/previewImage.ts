import { invokeMy } from '../invoke';

/**
 * 预览图片
 */
export default function previewImage(options: { urls: string[]; current?: number }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'previewImage', data: options });
}
