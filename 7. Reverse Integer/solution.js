/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNeg = 0 > x ? -1 : 1;
  let result = 0;
  let absx = Math.abs(x);

  while (absx > 0) {
    result = result * 10 + (absx % 10);
    absx = Math.floor(absx / 10);
  }

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0;

  return result * isNeg;
};
