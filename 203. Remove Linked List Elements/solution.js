/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return null;
  head.next = removeElements(head.next, val);
  return (head.val === val) ? head.next: head;
};

// var removeElements = function(head, val) {
//   while (!headl && head.val == val) head = head.next;
//   let cur = head;
//   while (!cur && !cur.next) {
//     if (cur.next.val == val) cur.next = cur.next.next;
//     else cur = cur.next;
//   }
//   return head;
// };