/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const T = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    T[i] = T[i - 1] + T[i - 2];
  }

  return T[n];
};
