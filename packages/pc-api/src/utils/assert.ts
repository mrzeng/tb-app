export default function assert(api: string) {
  if (!my.canIUse(api)) {
    throw new Error(`当前千牛版本过低，不支持my.${api}，请立即升级千牛到最新版本`);
  }
}
