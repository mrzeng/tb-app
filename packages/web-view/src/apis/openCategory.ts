import wrapInvoke from '../utils/invoke';

/**
 * 打开千牛的插槽协议。目前支持 shangpinguanli：itemList，itemDetail， jiaoyiguanli：tradeList，tradeDetail
 */
export default function openCategory(options: { category?: string; pageName: string; param?: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'qn.openCategory', data: options });
}
