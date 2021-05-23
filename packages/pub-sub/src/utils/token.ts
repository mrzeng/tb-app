let id = 0;
const prefix = 'UeyaQ2zt2t';

export function generateToken() {
  id += 1;
  return `${prefix}_${id}`;
}

export function isToken(token: string) {
  return token.indexOf(prefix) === 0;
}
