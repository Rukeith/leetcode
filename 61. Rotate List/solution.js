/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head ||!head.next) return head;

  // Link to a circle
  let cur = head;
  let edgeNum = 1;
  while (cur.next) {
    cur = cur.next;
    edgeNum++;
  }
  cur.next = head;

  // Rotate the circle
  k = edgeNum - k % edgeNum;
  while (k) {
    cur = cur.next;
    k--;
  }

  if (k === 0) {
    head = cur.next;
    cur.next = null;
  }

  return head;
};