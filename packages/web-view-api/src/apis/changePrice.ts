import { invokeMy } from '../invoke';

/**
 * 千牛提供更改商品价格的能力
 */
export default function changePrice(options: { tid: string }): Promise<{ success: boolean }> {
  return invokeMy({
    type: 'changePrice',
    data: options,
  });
}
