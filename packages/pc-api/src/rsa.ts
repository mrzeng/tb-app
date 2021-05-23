import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 非对称加密
 */
export default function rsa(options: { action: string; text: string; key: string }): Promise<{
  text: string;
}> {
  return invokeAsyncApi('rsa', options);
}
