/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.map = {};
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  this.map[key] = 1;
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  delete this.map[key];
};

/**
* Returns true if this set did not already contain the specified element 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  return this.map[key] === 1;
};

/** 
* Your MyHashSet object will be instantiated and called as such:
* var obj = Object.create(MyHashSet).createNew()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/