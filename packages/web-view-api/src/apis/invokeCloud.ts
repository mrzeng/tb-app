import wrapInvoke from '../utils/invoke';

export default function invokeCloud(data: { api: string; options: any }) {
  return wrapInvoke({ type: 'cloud', data });
}
