/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow = fast = n;
  do {
    slow = digitSquareSum(slow);
    fast = digitSquareSum(fast);
    fast = digitSquareSum(fast);
  } while (slow !== fast);
  return slow ===1;
};

function digitSquareSum(n) {
  let sum = 0;
  while (n) {
    sum += Math.pow((n % 10), 2);
    n = Math.floor(n / 10);
  }
  return sum;
}