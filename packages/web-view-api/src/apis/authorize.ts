import invokeMy from './invokeMy';

/**
 * 发起用户授权
 */
export default function authorize(options: { scopes: string }): Promise<{
  authSuccessScope: string;
}> {
  return invokeMy({
    api: 'authorize',
    options,
  });
}
