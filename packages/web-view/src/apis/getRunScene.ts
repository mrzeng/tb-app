import wrapInvoke from '../utils/invoke';

/**
 * 用于获取当前小程序的运行版本
 */
export default function getRunScene(): Promise<{
  envVersion: string;
}> {
  return wrapInvoke({ type: 'getRunScene' });
}
