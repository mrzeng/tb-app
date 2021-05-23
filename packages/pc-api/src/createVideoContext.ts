import invokeSyncApi from './utils/invokeSyncApi';

type F = () => void;

/**
 * 创建VideoContext, 传入 videoId，返回一个 videoContext 上下文。videoId 为开发者在对应 Video 标签中自由命名的 id 属性。 通过 videoContext 可以操作一个 video 组件。更多信息，请参见 小程序视频播放。
 */
export default function createVideoContext(videoId: string): Promise<{
  play: F;
  pause: F;
  stop: F;
  seek: (t: number) => void;
  requestFullScreen: (options: { direction: number }) => void;
  exitFullScreen: F;
}> {
  return invokeSyncApi('createVideoContext', videoId);
}
