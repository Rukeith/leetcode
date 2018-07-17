/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const memo = grid.shift();
  for (let i = 1; i < memo.length; i ++) {
    memo[i] = memo[i - 1] + memo[i];
  }

  const col = memo.length;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < col; j++) {
      memo[j] = Math.min(memo[j], (j === 0) ? Number.MAX_SAFE_INTEGER : memo[j - 1]) + grid[i][j];
    }
  }

  return memo[col - 1];
};