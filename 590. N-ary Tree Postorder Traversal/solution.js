/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  const res = [];
  function order(root) {
    if (root) {
      const cd = root.children;
      cd.forEach(ele => order(ele));
      res.push(root.val);
    }
  }
  order(root);
  return res;
};
