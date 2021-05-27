import wrapInvoke from '../utils/invoke';

/**
 * 调用小程序my的api
 * @param data
 * @returns
 */
export default function invokeMy(data: { api: string; style?: 'async' | 'sync' | 'value'; options: any }) {
  return wrapInvoke({ type: 'cloud', data: { style: 'async', ...data } });
}
