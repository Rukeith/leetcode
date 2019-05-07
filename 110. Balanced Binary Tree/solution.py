# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        result = True

        def counter(node):
            nonlocal result
            if not node:
                return 0
            dl = counter(node.left)
            if not result:
                return 0
            dr = counter(node.right)
            if abs(dl - dr) > 1:
                result = False
            return max(dl, dr) + 1
        counter(root)
        return result
