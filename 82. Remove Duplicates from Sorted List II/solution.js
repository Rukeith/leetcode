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
var deleteDuplicates = function (head) {
  let cur = head;
  let val;
  let good = null;
  let first = null;

  while (cur) {
    if (val !== cur.val) {
      if (!cur.next || (cur.next.val !== cur.val)) {
        if (good) good.next = cur;
        good = cur;
        first = first || good;
      } else {
        if (good) good.next = null;
      }
    }
    val = cur.val;
    cur = cur.next;
  }

  return first;
};