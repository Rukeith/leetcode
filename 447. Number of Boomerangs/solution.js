/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let ans = 0;
  const len = points.length;

  const getDis = (i, j) =>
    Math.pow(points[i][0] - points[j][0], 2) +
    Math.pow(points[i][1] - points[j][1], 2);

  for (let i = 0; i < len; i++) {
    const p = new Map();
    for (let j = 0; j < len; j++) {
      if (i !== j) {
        const dis = getDis(i, j);
        const count = ~~p.get(dis);
        ans += count;
        p.set(dis, count + 1);
      }
    }
  }

  return ans * 2;
};
