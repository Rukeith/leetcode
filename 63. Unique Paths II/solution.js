/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const cols = obstacleGrid[0].length;
  const paths = new Array(cols).fill(0);
  paths[0] = 1;

  obstacleGrid.forEach((currentRow) => {
    currentRow.forEach((element, colIndex) => {
      if (element === 1) {
        paths[colIndex] = 0;
      } else if (colIndex > 0) {
        paths[colIndex] += paths[colIndex - 1];
      }
    });
  });

  return paths[cols - 1];
};