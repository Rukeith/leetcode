/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  return !/(A.*A|LLL)/.test(s);
};