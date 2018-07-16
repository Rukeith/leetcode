/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m > n) return uniquePaths(n, m);
  
  const arr = Array(n).fill(1);

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      arr[col] += (arr[col - 1] || 1);
    }
  }

  return arr[n - 1];
};