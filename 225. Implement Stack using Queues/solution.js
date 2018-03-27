/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.list = [];
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.list.unshift(x);
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  return this.list.shift();
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.list[0];
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.list.length === 0;
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = Object.create(MyStack).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/