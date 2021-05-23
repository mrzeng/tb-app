import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 动态设置 tabBar 某一项的内容
 */
export default function setTabBarItem(options: {
  index: number;
  text: string;
  iconPath: string;
  selectedIconPath: string;
}): Promise<{ success: boolean }> {
  return invokeAsyncApi('setTabBarItem', options);
}
