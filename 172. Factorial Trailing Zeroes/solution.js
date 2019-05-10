/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  if (n < 5) return 0;
  const x = Math.trunc(n / 5);
  return x + trailingZeroes(x);
};
