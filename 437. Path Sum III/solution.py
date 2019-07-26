# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> int:
        """
        :type root: TreeNode
        :type sum: int
        :rtype: int
        """
        def dfs(node, current_sum):
            self.count += path_freqs.get(current_sum - sum, 0)
            path_freqs[current_sum] = path_freqs.get(current_sum, 0) + 1
            if node.left:
                dfs(node.left, current_sum + node.left.val)
            if node.right:
                dfs(node.right, current_sum + node.right.val)
            path_freqs[current_sum] = path_freqs.get(current_sum, 0) - 1

        self.count = 0
        path_freqs = {0: 1}

        if root:
            dfs(root, root.val)
        return self.count
