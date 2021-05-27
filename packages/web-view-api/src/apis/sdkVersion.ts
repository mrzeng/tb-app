import wrapInvoke from '../utils/invoke';

/**
 * 获取基础库版本号
 */
export default function SDKVersion(): Promise<string> {
  return wrapInvoke({ type: 'SDKVersion' });
}
