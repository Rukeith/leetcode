# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def helper(self, num, first, last):
        if last < first:
            return None

        mid = first + (last - first) // 2
        root = TreeNode(num[mid])
        root.left = self.helper(num, first, mid - 1)
        root.right = self.helper(num, mid + 1, last)
        return root

    def sortedArrayToBST(self, num):
        return self.helper(num, 0, len(num) - 1)
