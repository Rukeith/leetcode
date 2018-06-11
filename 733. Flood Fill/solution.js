/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let visited = new Array(image.length);
  for (let i = 0; i < image.length; i++) {
    visited[i] = new Array(image[0].length);
  }

  const helper = (image, sr, sc, oldColor, newColor, visited) => {
    if (sr < 0 || sr >= image.length || sc < 0 || sc>= image[0].length) {
      return;
    }
  
    if (image[sr][sc] === oldColor && !visited[sr][sc]) {
        image[sr][sc] = newColor;
        visited[sr][sc] = true;
        helper(image, sr, sc + 1, oldColor, newColor, visited);
        helper(image, sr, sc - 1, oldColor, newColor, visited);
        helper(image, sr + 1, sc, oldColor, newColor, visited);
        helper(image, sr - 1, sc, oldColor, newColor, visited);
    } 
  }

  helper(image, sr, sc, image[sr][sc], newColor, visited);
  return image;
};