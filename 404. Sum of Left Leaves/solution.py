# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        if not root or (not root.left and not root.right):
            return 0
        res = 0
        q = [root]
        while q:
            t = q.pop(0)
            if t.left and not t.left.left and not t.left.right:
                res += t.left.val
            if t.left:
                q.append(t.left)
            if t.right:
                q.append(t.right)
        return res
