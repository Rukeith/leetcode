/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let t = num;
  while (Math.abs(t - num / t) > 1) t = (t + num / t) / 2;
  return Math.pow(t >> 0, 2) === num;
};
