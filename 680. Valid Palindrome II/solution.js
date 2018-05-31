/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  function isPalindrome(start, end, s) {
    while (++start < --end) if (s[start] !== s[end]) return false;
    return true;
  }

  let start = -1;
  let end = s.length;
  while (++start < --end) {
    if (s[start] !== s[end]) return isPalindrome(start - 1, end, s) || isPalindrome(start, end + 1, s);
  }

  return true;
};