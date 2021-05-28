import { invokeMy } from '../invoke';

/**
 * 数据库:千牛为小程序提供了数据库存储能力（my.database），但对插件数据库的大小做了限制，务必仔细最后一部分说明，未处理数据超限警告可能会导致数据库缓存被删除。
 */
export default function database(options: { method: 'execSql' | 'batchSql'; sql: string }): Promise<{
  data: string;
  errorMessage: string;
}> {
  return invokeMy({ type: 'qn.database', data: options });
}
