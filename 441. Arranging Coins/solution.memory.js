/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return Math.floor((1 / 2) * (Math.sqrt(8 * n + 1) - 1));
};
