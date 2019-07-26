/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  const arr = new Array(points.length);
  let result = 0;
  arr.fill(0);

  function dist(a, b) {
    return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
  }

  for (let point of points) {
    for (let i = 0; i < points.length - 1; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (dist(point, points[i]) == dist(point, points[j])) {
          result += 1;
        }
      }
    }
  }

  return result * 2;
};
