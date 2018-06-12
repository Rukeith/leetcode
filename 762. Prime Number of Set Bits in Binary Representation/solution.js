/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  const primes = new Set([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67]);
  let count = 0;
  for (let i = L; i <= R; ++i) {
    let bc = 0, tmp = i;
    while(tmp) {
      bc++;
      tmp = tmp & (tmp - 1);
    }
    if (primes.has(bc)) {
      count++;
    }
  }
  return count;
};