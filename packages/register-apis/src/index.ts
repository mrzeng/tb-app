import { registry } from '@tb-app/web-view';
import * as api from '@tb-app/pc-api';
import prefix from './utils/prefix';

export default function registerAll() {
  Object.keys(api).forEach((key) => {
    // 只注册不带on前缀的api
    if (key.indexOf('on') !== 0) {
      // @ts-ignore
      registry(`${prefix}${key}`, api[key]);
    }
  });
}
