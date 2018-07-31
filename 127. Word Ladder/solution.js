/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const visited = new Set();
  wordList = new Set(wordList);
  if (wordList.size < 1 || !wordList.has(endWord)) return 0;
  wordList.delete(endWord);

  let len = 1,
    beginSet = new Set([beginWord]),
    endSet = new Set([endWord]);

  while (beginSet.size > 0 && endSet.size > 0) {
    if (beginSet.size > endSet.size) {
      let tmp = beginSet;
      beginSet = endSet;
      endSet = tmp;
    }

    const temp = new Set();

    for (let word of beginSet.keys()) {
      for (let i = 0; i < word.length; i++) {
        const former = i === 0 ? '' : word.slice(0, i);
        const after = word.slice(i + 1);

        for (let j = 0; j < 26; j++) {
          const newWord = former + String.fromCharCode(97 + j) + after;

          if (endSet.has(newWord)) return len + 1;
          if (!visited.has(newWord) && wordList.has(newWord)) {
            temp.add(newWord);
            visited.add(newWord);
          }
        }
      }
    }

    beginSet = temp;
    len++;
  }

  return 0;
};