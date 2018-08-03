/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) return;
  const arr = [];
  let node = head;

  while (node) {
    arr.push(node);
    node = node.next;
  };

  const len = Math.ceil((arr.length - 1) / 2);
  for (let i = 0; i < len;) {
    node = arr[i];
    node.next = arr[(arr.length - 1) - i];
    i += 1;
    node.next.next = arr[i];
  }

  arr[len].next = null;
};