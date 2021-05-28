import { invokeMy } from '../invoke';

/**
 * 获取当前网络状态
 */
export default function getNetworkType(): Promise<{
  networkAvailable: boolean;
  isConnected: boolean;
  networkType: string;
}> {
  return invokeMy({ type: 'getNetworkType' });
}
