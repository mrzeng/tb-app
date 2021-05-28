import { invokeMy } from '../invoke';

/**
 * 同步获取模板ext.json中的ext配置
 */
export default function getExtConfigSync(): Promise<{
  data: unknown;
}> {
  return invokeMy({ type: 'getExtConfigSync' });
}
