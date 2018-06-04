/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const h = grid.length;
  const w = grid[0].length;

  const dfs = (i, j) => {
    if (i >= 0 && h > i && j >= 0 && w > j) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        return 1 + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i + 1, j) + dfs(i, j - 1);
      }
    }
    return 0;
  };

  let result = 0;
  for (let x = 0; h > x; x++) {
    for (let y = 0; w > y; y++) {
      result = Math.max(result, dfs(x, y));
    }
  }
  return result;
};