/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let res = 0;
  let l = -1;
  for (let r = 0; r < seats.length; r++) {
    if (seats[r] == 0) {
      if (l === -1 || r === seats.length - 1) res = Math.max(res, r - l);
      else res = Math.max(res, Math.trunc((r - l + 1) / 2));
    } else l = r;
  }
  return res;
};