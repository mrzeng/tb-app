import { invoke } from '../invoke';
import prefix from './prefix';

export default function wrapInvoke({ type, data }: { type: string; data?: any }) {
  return invoke({
    type: `${prefix}${type}`,
    data,
  });
}
