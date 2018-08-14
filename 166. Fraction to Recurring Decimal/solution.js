/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator === 0) return '0';
  const isNegative = (numerator < 0) ^ (denominator < 0);
  const num = Math.abs(numerator);
  const den = Math.abs(denominator);
  const map = {};
  let res = `${isNegative ? '-' : ''}${Math.floor(num / den)}`;

  let reminder = num % den;
  if (reminder === 0) return res;
  res += '.';
  map[reminder] = res.length;

  while (reminder !== 0) {
    reminder *= 10;
    res += Math.floor(reminder / den);
    reminder = parseInt(reminder % den);

    if (reminder in map) {
      res = `${res.slice(0,map[reminder])}(${res.slice(map[reminder])})`;
      break;
    }
    map[reminder] = res.length;
  }

  return res;
};