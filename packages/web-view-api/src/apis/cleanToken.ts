import { invokeMy } from '../invoke';

/**
 * 清除三方授权token
 */
export default function cleanToken(): Promise<{ success: boolean }> {
  return invokeMy({
    type: 'qn.cleanToken',
  });
}
