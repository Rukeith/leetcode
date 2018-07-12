/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  if (!matrix.length) return result;

  let row1 = 0;
  let row2 = matrix.length - 1;
  let col1 = 0;
  let col2 = matrix[0].length - 1;

  while (row1 <= row2 && col1 <= col2) {
    for (let c = col1; c <= col2; c++) {
      result.push(matrix[row1][c])
    }
    for (let r = row1 + 1; r <= row2; r++) {
      result.push(matrix[r][col2])
    }

    if (row1 < row2 && col1 < col2) {
      for (let c = col2 - 1; c >= col1; c--) {
        result.push(matrix[row2][c])
      }

      for (let r = row2 - 1; r > row1; r--) { // r > row1 because row1 have been added
        result.push(matrix[r][col1])
      }
    }

    row1++;
    row2--;
    col1++;
    col2--;
  }

  return result;
};