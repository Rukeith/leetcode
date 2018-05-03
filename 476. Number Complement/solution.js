/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  const bits = Math.floor(Math.log2(num)) + 1;
  return ~num << 32 - bits >>> 32 - bits;
};