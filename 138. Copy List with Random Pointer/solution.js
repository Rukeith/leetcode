/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  if (!head) return null;

  let curr = head;
  let newNode;
  while (curr) {
    newNode = new RandomListNode(curr.label);
    newNode.next = curr.next;
    curr.next = newNode;
    curr = newNode.next;
  }

  curr = head;
  let random;
  while (curr) {
    random = curr.random;
    newNode = curr.next;
    newNode.random = random && random.next;
    curr = newNode && newNode.next;
  }

  let newHead = head.next;
  const curr2 = newHead;
  curr = head;
  while (curr) {
    curr.next = curr.next.next;
    newHead.next = newHead.next && newHead.next.next;
    curr = curr.next;
    newHead = newHead.next;
  }

  return curr2;
};