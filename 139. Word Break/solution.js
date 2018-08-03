/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dfs = (i, s, wordDict, T) => {
    if (i === s.length) return true;
    if (T[i] !== undefined) return T[i];

    for (let word of wordDict) {
      if (s.startsWith(word, i) && dfs(i + word.length, s, wordDict, T)) {
        return true;
      }
    }

    T[i] = false;
    return false;
  };

  return dfs(0, s, wordDict, Array(s.length));
};