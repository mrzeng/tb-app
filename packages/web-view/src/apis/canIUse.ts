import wrapInvoke from '../utils/invoke';

/**
 * 判断当前小程序的 API、入参或返回值、组件、属性等在当前版本是否支持
 */
export default function canIUse(apiName: string): Promise<boolean> {
  return wrapInvoke({
    type: 'canIUse',
    data: apiName,
  });
}
