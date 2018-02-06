/**
 * 83. Remove Duplicates from Sorted List
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 * 
 * For example,
 * Given 1->1->2, return 1->2.
 * Given 1->1->2->3->3, return 1->2->3.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * URL:
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 */
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) return head;
  head.next = deleteDuplicates(head.next);
  return head.val === head.next.val ? head.next : head;
};