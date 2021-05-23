export default function warning(message: string) {
  console.error(message);
  throw new Error(message);
}
