import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 千牛提供更改商品价格的能力
 */
export default function changePrice(options: { tid: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.changePrice', options);
}
