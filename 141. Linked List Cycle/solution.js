/**
 * 141. Linked List Cycle
 * Given a linked list, determine if it has a cycle in it.
 * 
 * Follow up:
 * Can you solve it without using extra space?
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * @param {ListNode} head
 * @return {boolean}
 * 
 * URL:
 * https://leetcode.com/problems/linked-list-cycle/description/
 */
var hasCycle = function(head) {
  if (head === null) return false;
  const walker = head;
  const runner = head;
  while(runner.next !== null && runner.next.next !== null) {
    walker = walker.next;
    runner = runner.next.next;
    if (walker === runner) return true;
  }
  return false;
};