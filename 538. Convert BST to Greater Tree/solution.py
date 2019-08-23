# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        def dfs(root, sum):
            if not root:
                return sum

            root.val += dfs(root.right, sum)
            sum = root.val
            return dfs(root.left, sum)

        dfs(root, 0)
        return root
