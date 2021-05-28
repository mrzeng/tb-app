import { invokeMy } from '../invoke';

/**
 * 获取基础库版本号
 */
export default function SDKVersion(): Promise<string> {
  return invokeMy({ type: 'SDKVersion' });
}
