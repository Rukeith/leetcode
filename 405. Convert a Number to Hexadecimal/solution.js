/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  return num > -1 ? num.toString(16) : (num + 2 ** 32).toString(16);
};
