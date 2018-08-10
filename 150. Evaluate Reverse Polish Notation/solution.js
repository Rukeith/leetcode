/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  const op = ['+', '-', '*', '/'];

  tokens.forEach(t => {
    if (op.indexOf(t) !== -1) {
      const b = stack.pop();
      const a = stack.pop();

      if (t === '+') {
        stack.push(a + b);
      } else if (t === '-') {
        stack.push(a - b);
      } else if (t === '*') {
        stack.push(a * b);
      } else if (t === '/') {
        const res = a / b;
        if (res >= 0) {
          stack.push(Math.floor(res));
        } else {
          stack.push(Math.ceil(res));
        }
      }
    } else {
      stack.push(parseInt(t));
    }
  });

  return stack[0];
};