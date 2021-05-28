import { invokeMy } from '../invoke';

/**
 * 获取模板ext.json中的ext配置
 */
export default function getExtConfig(): Promise<{
  data: unknown;
}> {
  return invokeMy({ type: 'getExtConfig' });
}
