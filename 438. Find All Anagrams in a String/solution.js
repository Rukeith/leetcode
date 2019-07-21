/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (s.length < p.length) return [];
  let freqs = new Array(256).fill(0);
  for (let i = 0; i < p.length; i++) {
    freqs[p.charCodeAt(i)]++;
  }
  let matches = 0;
  for (let i = 0; i < p.length - 1; i++) {
    if (freqs[s.charCodeAt(i)]-- > 0) matches++;
  }
  let res = [];
  for (let i = 0; i < s.length - p.length + 1; i++) {
    if (freqs[s.charCodeAt(i + p.length - 1)]-- > 0) matches++;
    if (matches === p.length) res.push(i);
    if (++freqs[s.charCodeAt(i)] > 0) matches--;
  }
  return res;
};
