/**
 * 155. Min Stack
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 * 
 * Example:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 * 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 * 
 * URL:
 * https://leetcode.com/problems/min-stack/description/
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.arr = [];
  this.min = Number.MAX_SAFE_INTEGER;
  this.max = Number.MIN_SAFE_INTEGER;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (x > this.max) this.max = x;
  if (x < this.min) this.min = x;
  this.arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this.arr.pop();
  if (this.arr.length < 1) {
    this.max = 0;
    this.min = 0;
  } else {
    this.max = Math.max(...this.arr);
    this.min = Math.min(...this.arr);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.max;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};