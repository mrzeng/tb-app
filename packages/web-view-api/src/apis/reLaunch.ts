import { invokeMy } from '../invoke';
/**
 * 关闭当前所有页面，跳转到应用内的某个指定页面
 */
export default function reLaunch(options: { url: string }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'reLaunch', data: options });
}
