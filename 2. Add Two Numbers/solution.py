# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
  def addTwoNumbers(self, l1, l2):
    """
    :type l1: ListNode
    :type l2: ListNode
    :rtype: ListNode
    """
    p = l1
    q = l2
    t = None
    c = 0

    while p and q:
      p.val = p.val + q.val + c
      c = p.val // 10
      p.val = p.val % 10
      t = p
      p = p.next
      q = q.next

    while p:
      p.val = p.val + c
      c = p.val // 10
      p.val = p.val % 10
      t = p
      p = p.next

    p = t
    p.next = q
    p = p.next

    while p:
      p.val = p.val + c
      c = p.val // 10
      p.val = p.val % 10
      t = p
      p = p.next

    if c == 1:
      p = t
      x = ListNode(1)
      p.next = x

    return l1