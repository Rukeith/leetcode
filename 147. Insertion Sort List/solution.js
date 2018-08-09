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
var insertionSortList = function(head) {
  const before = {
    val: -Number.MAX_VALUE,
    next: null
  };

  while (head) {
    let prev = before;

    while (prev.next && prev.next.val < head.val) {
      prev = prev.next;
    }

    const { next } = head;
    head.next = prev.next;
    prev.next = head;
    head = next;
  }

  return before.next;
};