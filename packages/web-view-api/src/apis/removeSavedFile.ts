import wrapInvoke from '../utils/invoke';

/**
 * 删除某个保存的文件
 */
export default function removeSavedFile(options: { apFilePath: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'removeSavedFile', data: options });
}
