import invokeAsyncApi from './utils/invokeAsyncApi';

type SizeType = 'original' | 'compressed';
type SourceType = 'camera' | 'album';

/**
 * 拍照或从手机相册中选择图片:请注意，淘宝小程序不支持设置sizeType字段。 另外，此API获取到的图片路径是伪路径，若要获取本地路径，需要配合my.getImageInfo 使用。
 */
export default function chooseImage(options?: {
  count?: number;
  sizeType?: SizeType | SizeType[];
  sourceType?: SourceType | SourceType[];
}): Promise<{ apFilePaths: string[]; compressLevel: number; tempFilePaths: string[] }> {
  return invokeAsyncApi('chooseImage', options);
}
