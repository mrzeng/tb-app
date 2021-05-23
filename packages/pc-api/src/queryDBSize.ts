import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 警查询数据库大小:该API提供查询当前小程序所使用的数据库大小，便于ISV实时看当前使用情况，避免超出数据库大小限制。
 */
export default function queryDBSize(): Promise<{
  dbSize: number;
  warningLimit: number;
  deleteLimit: number;
}> {
  return invokeAsyncApi('qn.queryDBSize');
}
