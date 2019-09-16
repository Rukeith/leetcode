# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def findTilt(self, root: TreeNode) -> int:
        self.total = 0

        def dfs(root):
            if not root:
                return 0
            lft = dfs(root.left)
            rgt = dfs(root.right)
            self.total += abs(lft - rgt)
            return (lft + rgt + root.val)

        dfs(root)
        return self.total
