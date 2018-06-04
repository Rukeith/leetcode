/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  return !!/^(10)*1?$/g.test((n).toString(2)); 
};