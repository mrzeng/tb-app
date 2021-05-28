import { invokeMy } from '../invoke';

/**
 * 发起用户授权
 */
export default function authorize(options: { scopes: string }): Promise<{
  authSuccessScope: string;
}> {
  return invokeMy({
    type: 'authorize',
    data: options,
  });
}
