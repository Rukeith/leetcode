/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const n = triangle.length;
  let minLen = [...triangle[n - 1]];

  for (let row = n - 2; row >= 0; row -= 1) {
    for (let i = 0; i <= row; i += 1) {
      minLen[i] = Math.min(minLen[i], minLen[i + 1]) + triangle[row][i];
    }
  }

  return minLen[0];
};