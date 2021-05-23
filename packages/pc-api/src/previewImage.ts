import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 预览图片
 */
export default function previewImage(options: { urls: string[]; current?: number }): Promise<{ success: boolean }> {
  return invokeAsyncApi('previewImage', options);
}
