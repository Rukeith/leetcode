class WordDictionary {
  constructor() {
    this.map = {};
  }

  /**
   * Adds a word into the data structure. 
   * @param {string} word
   * @return {void}
   */
  addWord(w) {
    const l = w.length;
    this.map[l] = this.map[l] || [];
    this.map[l].push(w);
  }

  match(exist, input) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== '.' && input[i] !== exist[i]) return false;
    }

    return true;
  }

  /**
   * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
   * @param {string} word
   * @return {boolean}
   */
  search(w) {
    const l = w.length;
    for (const ww of this.map[l] || []) {
      if (this.match(ww, w)) return true;
    }

    return false;
  }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */