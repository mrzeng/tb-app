import wrapInvoke from '../utils/invoke';

/**
 * 清除三方授权token
 */
export default function cleanToken(): Promise<{ success: boolean }> {
  return wrapInvoke({
    type: 'qn.cleanToken',
  });
}
