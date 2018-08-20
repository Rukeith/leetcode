/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (!(c in cur)) cur[c] = {};
    cur = cur[c];
  }
  cur['.'] = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (!(c in cur)) return false;
    cur = cur[c];
  }
  return '.' in cur;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;
  for (let i = 0, len = prefix.length; i < len; i++) {
    const c = prefix.charAt(i);
    if (!(c in cur)) return false;
    cur = cur[c];
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */