/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const filterString = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
  const reverseString = filterString.split('').reverse().join('');
  return filterString === reverseString;
};