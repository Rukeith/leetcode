/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const result = [];
  const map = new Map();
  const sArray = new Array(26);

  strs.forEach((str) => {
    for (let i = 0; i < 26; i++) sArray[i] = 0;

    str.split('').forEach(s => sArray[s.charCodeAt(0) - 'a'.charCodeAt(0)]++);

    let hash = 0;
    sArray.forEach(n => hash = ((hash<<3) - hash) + n);
    (map.has(hash)) ? map.get(hash).push(str) : map.set(hash, [str]);
  });

  map.forEach(value => result.push(value));
  return result;
};