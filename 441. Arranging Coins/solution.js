/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  let first = 0;
  let last = n;
  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2);
    const target = ((mid + 1) * mid) / 2;
    if (target > n) {
      last = mid;
    } else {
      first = mid + 1;
    }
  }

  return first - 1;
};
