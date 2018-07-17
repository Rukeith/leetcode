/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [], splitPath = path.split('/').filter(t => !['/', '', '.'].includes(t));
  splitPath.forEach(t => t === '..' ? stack.pop() : stack.push(t));
  return `/${stack.join('/')}`;
};