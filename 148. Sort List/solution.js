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
var sortList = function(head) {
  if (!head || !head.next) return head;

  let slow = head,
    fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const second = slow.next;
  slow.next = null;

  const l1 = sortList(head);
  const l2 = sortList(second);

  const merge = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;

    let temp = new ListNode(0);
    const returnHead = temp;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        temp.next = l1;
        l1 = l1.next;
      } else {
        temp.next = l2;
        l2 = l2.next;
      }
      temp = temp.next;
    }

    if (l1) temp.next = l1;
    if (l2) temp.next = l2;
    return returnHead.next
  }

  return merge(l1, l2);
};