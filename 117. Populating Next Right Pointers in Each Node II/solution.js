/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root) return;
  let temp = new TreeLinkNode(0); 
  let dummy = temp;

  while (root) {
    if (root.left) {
      temp.next = root.left;
      temp = temp.next;
    }
    if (root.right) {
      temp.next = root.right;
      temp = temp.next;
    }

    root = root.next;
    if (!root) {
      root = dummy.next;
      temp = new TreeLinkNode(0);
      dummy = temp;
    }
  }
};