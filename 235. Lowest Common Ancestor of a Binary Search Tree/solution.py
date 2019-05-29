# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        a = min(q.val, p.val)
        b = max(q.val, p.val)
        while not(root.val >= a and root.val <= b):
            if root.val > b:
                root = root.left
            elif root.val < a:
                root = root.right
        return root
