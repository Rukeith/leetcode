/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = []
  if (s.length > 12 || s.length < 4) return result;

  function traverse(current, next, n, missed) {
    function addNumber(digits) {
      if (next.length === digits) {
        if (n === 3) {
          result.push(`${current}.${next}`);
        }
      } else {
        traverse(current + (current ? '.' : '') + next.slice(0, digits), next.slice(digits), n + 1, missed - 3 + digits);
      }
    }

    if (missed < 0) return;
    if (next.length >= 3 && (next[0] == 2 && (next[1] == 5 && next[2] <= 5 || next[1] < 5) || next[0] == 1)) {
      addNumber(3);
    }
    if (missed > 0 && next.length >= 2 && next[0] > 0) {
      addNumber(2);
    }
    if (missed > 1 && next.length >= 1) {
      addNumber(1);
    }
  }

  traverse('', s, 0, 12 - s.length);
  return result;
};