import assert from './utils/assert';
/**
 * 自定义分析数据的上报接口
 */
export default function reportAnalytics(eventName: string, data: unknown): Promise<{ success: boolean }> {
  assert('reportAnalytics');
  return my.reportAnalytics(eventName, data);
}
