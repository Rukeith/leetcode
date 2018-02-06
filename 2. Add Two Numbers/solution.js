/**
 * 2. Add Two Numbers
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * URL:
 * https://leetcode.com/problems/add-two-numbers/
 */
var addTwoNumbers = function(l1, l2) {
  const l1val = l1 ? l1.val : 0;
  const l2val = l2 ? l2.val : 0;
  let val = l1val + l2val;
  
  if (val >= 10) {
    val -= 10;
    const current = l1 || l2;
    if (current) {
      current.next ? current.next.val += 1 : current.next = new ListNode(1);
    } else {
      l1 = new ListNode(0);
      l1.next = new ListNode(1);
    }
  }

  const node = new ListNode(val);
  node.next = (l1 && l1.next) || (l2 && l2.next)
    ? addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next: null)
    : null;

  return node;
};
