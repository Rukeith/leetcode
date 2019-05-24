# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        prev = None
        curr = head
        while curr:
            if curr.val == val:
                if prev:
                    prev.next = curr.next
                else:
                    head = curr.next
            else:
                prev = curr
            curr = curr.next
        return head
