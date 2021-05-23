import invokeSyncApi from './utils/invokeSyncApi';

type F = () => void;
/**
 * 创建音频
 */
export default function createInnerAudioContext(): {
  src: string;
  startTime: number;
  autoplay: boolean;
  loop: boolean;
  obeyMuteSwitch: boolean;
  duration: number;
  currentTime: number;
  paused: boolean;
  buffered: number;
  volume: number;
  isRecordAudioPlayState: boolean;
  play: F;
  pause: F;
  stop: F;
  seek: (t: number) => void;
  destroy: F;
  onCanplay: F;
  onPlay: F;
  onPause: F;
  onStop: F;
  onEnded: F;
  onTimeUpdate: F;
  onError: F;
  onWaiting: F;
  onSeeking: F;
  onSeeked: F;
} {
  return invokeSyncApi('createInnerAudioContext');
}
