import { invokeMy } from '../invoke';

/**
 * 压缩图片
 */
export default function compressImage(options: {
  apFilePaths: string[];
  compressLevel?: 0 | 1 | 2 | 3 | 4;
}): Promise<{ apFilePaths: string[]; compressLevel: number }> {
  return invokeMy({ type: 'compressImage', data: options });
}
