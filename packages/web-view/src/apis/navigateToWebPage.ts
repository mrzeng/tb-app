import wrapInvoke from '../utils/invoke';
/**
 * 跳转千牛容器打开H5页面
 */
export default function navigateToWebPage(options: { url: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'qn.navigateToWebPage', data: options });
}
