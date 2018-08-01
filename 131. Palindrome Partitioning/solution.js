/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  if (!s) return [];

  const helper = (str, index, result, results) => {
    const isPalindrome = (str, left, right) => {
      while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
      }
      return true;
    };
  
    if (index === str.length) results.push(result.slice());
    for (let i = index; i < str.length; i++) {
      if (isPalindrome(str, index, i)) {
        result.push(str.substring(index, i + 1));
        helper(str, i + 1, result, results);
        result.pop();
      }
    }
  };

  const ret = [];
  helper(s, 0, [], ret);
  return ret;
};