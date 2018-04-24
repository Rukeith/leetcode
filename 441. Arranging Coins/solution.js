/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let lo = 1, hi = n;
  while (hi >= lo) {
    const mid = Math.floor((lo + hi) / 2);
    if (n >= mid * (mid + 1) / 2) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return lo - 1;
};