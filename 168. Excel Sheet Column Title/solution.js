/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let result = "";
  while (n-- > 0) {
    result = String.fromCharCode(65 + (n % 26)) + result;
    n = Math.floor(n / 26);
  }
  return result;
};
