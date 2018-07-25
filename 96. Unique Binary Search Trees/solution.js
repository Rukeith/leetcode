/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const res = [1, 1];
  for (let i = 2; i <= n; i++) {
    res[i] = 0;
    for (let j = 0; j < i; j++) {
      res[i] += res[j] * res[i - j - 1];
    }
  }

  return res[n];
};