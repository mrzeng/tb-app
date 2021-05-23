import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 打开千牛插件接口
 */
export default function openPlugin(options: {
  appkey?: string;
  category?: string;
  param?: string;
  appParam?: string;
  directPage?: string;
  pageName?: string;
  directUrl: string;
}): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.openPlugin', options);
}
