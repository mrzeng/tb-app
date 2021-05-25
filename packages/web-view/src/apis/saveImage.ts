import wrapInvoke from '../utils/invoke';

/**
 * 保存在线图片到手机相册
 */
export default function saveImage(options: { url: string; showActionSheet?: boolean }): Promise<{ apFilePath: string }> {
  return wrapInvoke({ type: 'saveImage', data: options });
}
