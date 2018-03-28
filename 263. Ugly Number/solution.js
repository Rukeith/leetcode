/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num <= 0) return false;
  for (let p of [2, 3, 5])
    while (num && num % p === 0)
      num /= p;
  return num === 1;
};