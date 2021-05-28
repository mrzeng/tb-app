import { invokeMy } from '../invoke';

/**
 * 弹出子账号授权框
 */
export default function showSubAccountAuth(options: { api: string }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'qn.showSubAccountAuth', data: options });
}
