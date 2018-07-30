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
  let previous = root;
  let current;

  while (previous.left) {
    current = previous;
    while (current) {
      current.left.next = current.right;
      if (current.next) current.right.next = current.next.left;
      current = current.next;
    }
    previous = previous.left;
  }
};