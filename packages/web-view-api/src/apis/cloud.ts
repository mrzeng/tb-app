import { invokeCloud } from '../invoke';

type FileTypes = 'image' | 'video' | 'audio' | 'other';

/**
 * 文件上传
 * @param options
 */
function uploadFile(options: { filePath: string; fileType: FileTypes; fileName?: string; file?: any }): Promise<{
  fileId: string;
  url: string;
}> {
  return invokeCloud({ type: 'file.uploadFile', data: options });
}

/**
 * 删除文件
 * @param options
 */
function deleteFile(options: { fileType?: FileTypes; fileId: string }): Promise<boolean> {
  return invokeCloud({ type: 'file.deleteFile', data: options });
}

/**
 * 根据文件id(cloud://)获取授权的url
 * @param options
 */
function getTempFileURL(options: { fileType: string; fileId: string | string[] }): Promise<
  {
    fileId: string;
    status: number;
    url: string;
  }[]
> {
  return invokeCloud({ type: 'file.getTempFileURL', data: options });
}

/**
 * 调用 top API
 * @param options
 * @returns
 */
function invoke(options: { api: string; data?: any; headers?: any; authScope?: string }): Promise<any> {
  return invokeCloud({ type: 'topApi.invoke', data: options });
}

type Env = 'test' | 'pre' | 'online';
type Envs = {
  database: Env;
  file: Env;
  function: Env;
  message: Env;
};

/**
 * 初始化cloud
 * @param options
 * @returns
 */
function init(options: { env?: Env | Envs; appKey?: string }): Promise<boolean> {
  return invokeCloud({ type: 'init', data: options });
}

/**
 * http 请求
 */
function httpRequest(options: { path: string; params?: any; body?: any; headers?: any; method?: string; exts?: any }): Promise<any> {
  return invokeCloud({ type: 'application.httpRequest', data: options });
}

export default {
  file: {
    uploadFile,
    deleteFile,
    getTempFileURL,
  },
  topApi: {
    invoke,
  },
  init,
  application: {
    httpRequest,
  },
};
