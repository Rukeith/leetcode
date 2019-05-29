/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const arrNode = [];
  let currNode = head;
  while (currNode) {
    arrNode.push(currNode.val);
    currNode = currNode.next;
  }

  for (let i = 0; i < arrNode.length / 2; i++) {
    if (arrNode[i] !== arrNode[arrNode.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
