/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) return head;
  head.next = deleteDuplicates(head.next);
  return head.val === head.next.val ? head.next : head;
};

// var deleteDuplicates = function(head) {
//   var current = head;
//   while (current != null && current.next != null) {
//     if (current.val == current.next.val) {
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }

//   return head;
// };
