/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islands = 0;

  const search = (r, c, grid) => {
    if (r < 0 || 
      c < 0 || 
      r > grid.length - 1 || 
      c > grid[r].length - 1 ||
      grid[r][c] === '0') {
      return;
    }

    grid[r][c] = '0';
    search(r - 1, c, grid);
    search(r, c - 1, grid);
    search(r + 1, c, grid);
    search(r, c + 1, grid);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        search(i, j, grid);
        islands++;
      }
    }
  }

  return islands;
};