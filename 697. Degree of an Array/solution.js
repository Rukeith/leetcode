/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const d = {};
  let dg = 0, minDist = nums.length + 1, a = null, b = null;

  nums.forEach((j, i) => {
    if (!d[j]) {
      d[j] = [1, i, -1];
    } else {
      d[j][0] += 1;
      d[j][2] = i;
      v = d[j];
      a = v[0];
      b = v[2];

      if (b > -1) {
        dist = b - v[1] + 1;
        if (a > dg || (a === dg && dist < minDist)) {
          dg = a;
          minDist = dist;
        }
      }
    }
  });

  return dg !== 0 ? minDist : 1;
};