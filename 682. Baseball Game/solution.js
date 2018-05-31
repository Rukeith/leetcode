/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let sum = 0, p = 0;
  const validPoints = [];
  for (let i = 0, len = ops.length; i < len; ++i) {
    if (ops[i] === "C") {
      sum -= validPoints.pop();
      continue;
    }
    const vlen = validPoints.length;
    if (ops[i] === "+") {
      p = validPoints[vlen - 1] + validPoints[vlen - 2];
    } else if (ops[i] === "D") {
      p = validPoints[vlen - 1] * 2;
    } else {
      p = parseInt(ops[i]);
    }
    sum += p;
    validPoints.push(p);
  }
  return sum;
};