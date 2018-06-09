/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let absX = Math.abs(x);
  let result = 0;
  while (absX > 0) {
    result = result * 10 + absX % 10;
    absX = parseInt(absX / 10, 10);
  }
  result = x < 0 ? -result : result;
  return result >= Number.MIN_SAFE_INTEGER && result <= Number.MAX_SAFE_INTEGER ? result : 0;
};