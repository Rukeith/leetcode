/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) return 0;

  let count = 1;
  const isPrime = new Uint8Array(n);
  for (let i = 3; i < n; i += 2) {
    if (isPrime[i] === 0) {
      count++;

      for (let j = 2 * i; j < n; j += i) {
        isPrime[j] = 1;
      }
    }
  }

  return count;
};
