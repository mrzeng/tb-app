import { invokeMy } from '../invoke';

/**
 * 退出当前小程序
 */
export default function exit(): Promise<{ success: boolean }> {
  return invokeMy({ type: 'exit' });
}
