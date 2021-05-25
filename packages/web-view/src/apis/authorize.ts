import wrapInvoke from '../utils/invoke';

/**
 * 发起用户授权
 */
export default function authorize(options: { scopes: string }): Promise<{
  authSuccessScope: string;
}> {
  return wrapInvoke({
    type: 'authorize',
    data: options,
  });
}
