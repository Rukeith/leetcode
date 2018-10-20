/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNeg = x < 0;
  let result = 0;
  x = Math.abs(x);

  while (x > 0) {
    result = result * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  result = isNeg ? -result : result;

  if ((isNeg && result < Math.pow(-2, 31)) || (!isNeg && result > (Math.pow(2, 31) - 1)))
    return 0;
  
  return result;
};