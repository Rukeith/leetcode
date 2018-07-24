/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let start_prev = dummy, start_next, end_prev, end_next;
  let i = 0;

  while (head) {
    i++;
    if (i === m - 1) start_prev = head;
    else if (i === m) end_prev = head;
    if (i <= m) head = head.next;
    if (i > m && i <= n) {
      start_next = start_prev.next;
      end_next = head.next;
      start_prev.next = head;
      head.next = start_next;
      end_prev.next = end_next;
      head = end_next;
    }
    if (i > n) {
      break;
    }
  }

  return dummy.next;
};