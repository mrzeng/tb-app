export default function hasOwnProperty(obj: Object, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
