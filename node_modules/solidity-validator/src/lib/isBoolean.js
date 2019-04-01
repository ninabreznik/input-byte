import assertString from './util/assertString';

export default function isBoolean(str) {
  assertString(str);
  return (['true', 'false'].indexOf(str) >= 0);
}