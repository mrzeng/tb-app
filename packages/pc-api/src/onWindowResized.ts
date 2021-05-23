import invokeCallbackApi from './utils/invokeCallbackApi';
/**
 * 窗口大小变化
 */
export default function onWindowResized(
  callback: (res: {
    name: string;
    type: string;
    cancelable: boolean;
    preventDefault: () => void;
    isDefaultPrevented: () => void;
    data: {
      height: number;
      width: number;
    };
  }) => void
) {
  return invokeCallbackApi('qn.onWindowResized', callback);
}
