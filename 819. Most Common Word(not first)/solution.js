/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const words = paragraph.toLowerCase().split(/\W/);
  const mp = {};
  words.filter(x => x).map(x => mp[x] = x in mp ? mp[x] + 1 : 1);
  banned.map(x => mp[x] = -1)
  return Object.keys(mp).reduce((a, b) => mp[a] > mp[b] ? a : b);
};