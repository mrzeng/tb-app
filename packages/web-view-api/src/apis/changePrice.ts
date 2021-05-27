import wrapInvoke from '../utils/invoke';

/**
 * 千牛提供更改商品价格的能力
 */
export default function changePrice(options: { tid: string }): Promise<{ success: boolean }> {
  return wrapInvoke({
    type: 'changePrice',
    data: options,
  });
}
