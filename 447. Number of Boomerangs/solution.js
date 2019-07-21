/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let result = 0;

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const map = new Map();

    for (let j = 0; j < points.length; j++) {
      const x1 = points[j][0];
      const y1 = points[j][1];
      const dist = (x1 - x) * (x1 - x) + (y1 - y) * (y1 - y);
      if (map.has(dist)) {
        map.set(dist, map.get(dist) + 1);
      } else {
        map.set(dist, 1);
      }
    }

    for (const val of map.values()) {
      result += val * (val - 1);
    }
  }

  return result;
};
