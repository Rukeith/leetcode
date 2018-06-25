/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  else if (s.length <= 1) return s.length;

  let longest = 1;
  let i = 0;
  let j = 1;
	
  while (s.length > j) {
    if (s.slice(i, j).indexOf(s.charAt(j)) >= 0) {
      i += s.slice(i, j).indexOf(s.charAt(j)) + 1; 		
    } else {
      longest = Math.max(j - i + 1, longest);
    }

    j++;
  }

  return longest;
};