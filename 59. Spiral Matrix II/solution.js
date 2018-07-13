/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = []
  for (let i = 0; i < n; i++) matrix.push([]);

  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n - 1 - i; j++) {
      matrix[i][j] = num;
      num++;
    }
    for (let j = i; j < n - i; j++) {
      matrix[j][n - 1 - i] = num;
      num++;
    }
    for (let j = n - 2 - i; j >= i; j--) {
      matrix[n - i - 1][j] = num;
      num++;
    }
    for (let j = n - 2 - i; j > i; j--) {
      matrix[j][i] = num;
      num++;
    }
  }

  return matrix;
};