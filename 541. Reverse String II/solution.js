/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const reverseSubstring = x => x.split('').reverse().join('');

  if (k > 1) {
    return s.match(new RegExp(`.{1,${k * 2}}`, 'g'))
      .map(x => reverseSubstring(x.slice(0, k)) + x.slice(k)).join('');
  }

  return s;
};