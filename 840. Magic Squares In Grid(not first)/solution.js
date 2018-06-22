/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  const isMaigicSquare = (x, y) => {
    const set = new Set();
    for (let i = 0; i < 3; i++) {
      let rsum = 0, csum = 0;
      for (let j = 0; j < 3; j++) {
        rsum += grid[i + x][j + y];
        csum += grid[j + x][i + y];
        if (grid[i + x][j + y] < 10) set.add(grid[i + x][j + y]);
        else return 0;
      }
      if (rsum !== 15 || csum !== 15) return 0;
    }
    if (set.size === 9 &&
      grid[x][y] + grid[x + 1][y + 1] + grid[x + 2][y + 2] === 15 &&
      grid[x + 2][y] + grid[x + 1][y + 1] + grid[x][y + 2] === 15) return 1;
    else return 0;
  }
  let res = 0;
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[0].length - 2; j++) {
      res += isMaigicSquare(i, j);
    }
  }
  return res;
};