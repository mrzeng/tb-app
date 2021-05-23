import invokeSyncApi from './utils/invokeSyncApi';

/**
 * 通过创建 webviewContext 提供从小程序向 web-view 发送消息的能力
 */
export default function createWebViewContext<T = unknown>(
  id: string
): {
  postMessage: (param: T) => void;
} {
  return invokeSyncApi('createWebViewContext', id);
}
