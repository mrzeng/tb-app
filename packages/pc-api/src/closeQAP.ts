import invokeAsyncApi from './utils/invokeAsyncApi';
/**
 * 关闭插件页面
 */
export default function closeQAP(): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.closeQAP');
}
