/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (!this.min.length) {
    this.min.push(x);
  } else if (x <= this.min[this.min.length - 1]) {
    this.min.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const x = this.stack.pop();
  if (x === this.min[this.min.length - 1]) {
    this.min.pop();
  }
  return x;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
