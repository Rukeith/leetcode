/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return head;
  const arr = [];

  while(head) {
    arr.push(head.val);
    head = head.next;
  }

  const findSubTree = (arr, lower, upper) => {
    const mid = Math.ceil((lower + upper) / 2);
    const tree = new TreeNode(arr[mid]);

    if (lower < mid) {
      tree.left = findSubTree(arr, lower, mid - 1);
    }
    if (upper > mid) {
      tree.right = findSubTree(arr, mid + 1, upper);
    }
    return tree;
  }

  return findSubTree(arr, 0, arr.length - 1);
};