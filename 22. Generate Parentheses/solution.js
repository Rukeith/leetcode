/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];

  const helper = (left, right, partial = '(') => {
    if (left <= 0) {
      while(right > 0) {
        partial += ')';
        right--;
      }
      result.push(partial);
    } else {
      helper(left - 1, right, `${partial}(`);
      if (right > left) helper(left, right - 1, `${partial})`);
    }
  };

  helper(n - 1, n);
  return result;
};