import invokeMy from './invokeMy';

/**
 * 判断当前小程序的 API、入参或返回值、组件、属性等在当前版本是否支持
 */
export default function canIUse(apiName: string): Promise<boolean> {
  return invokeMy({
    api: 'canIUse',
    style: 'sync',
    options: apiName,
  });
}
