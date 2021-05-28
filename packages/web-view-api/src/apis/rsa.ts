import { invokeMy } from '../invoke';

/**
 * 非对称加密
 */
export default function rsa(options: { action: string; text: string; key: string }): Promise<{
  text: string;
}> {
  return invokeMy({ type: 'rsa', data: options });
}
