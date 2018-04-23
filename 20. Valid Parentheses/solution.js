/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const open = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  const closed = {
    '}': true,
    ']': true,
    ')': true,
  }

  for (let i = 0; s.length > i; i++) {
    const curr = s[i];
    if (open[curr]) {
      stack.push(curr);
    } else if (closed[curr]) {
      const last = stack.pop();
      if (open[last] !== curr) return false;
    }
  }
  
  return stack.length === 0;
};