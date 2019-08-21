/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  let sum = 1;
  for (let i = 2, n = Math.sqrt(num); i < n; i++) {
    if (num % i === 0) sum += i + num / i;
  }
  return num !== 1 && sum === num;
};
