/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const result = [0];

  if (n === 0) return result;
  for (let i = 1; i <= n; i++) {
    for (let j = Math.pow(2, i - 1); j > 0; j--) {
      result.push(result[j - 1] + (1 << (i - 1)));
    }
  }
  return result;
};