/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const qArr = [root];
  let size = 1;
  let fromLeft = true;

  while (qArr.length > 0) {
    const tempArr = [];

    for (let i = 0; i < size; i++) {
      const temp = qArr.shift();
      if (fromLeft) tempArr.push(temp.val);
      else tempArr.unshift(temp.val);

      if (temp.left) qArr.push(temp.left);
      if (temp.right) qArr.push(temp.right);
    }
    fromLeft = fromLeft ? false : true;
    size = qArr.length;
    result.push(tempArr);
  }
  return result;
};