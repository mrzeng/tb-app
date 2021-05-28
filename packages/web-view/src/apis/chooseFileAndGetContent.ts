import wrapInvoke from '../utils/invoke';

/**
 * 打开文件并获取内容
 */
export default function chooseFileAndGetContent(options?: { count?: number; type?: number }): Promise<{ fileContentMap: unknown }> {
  return wrapInvoke({ type: 'qn.chooseFileAndGetContent', data: options });
}
