# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> int:
        def dfs(node, curSum):
            self.count += d[curSum - sum]
            d[curSum] += 1
            if node.left:
                dfs(node.left, curSum + node.left.val)
            if node.right:
                dfs(node.right, curSum + node.right.val)
            d[curSum] -= 1

        self.count = 0
        d = collections.defaultdict(int)
        d[0] = 1
        if root:
            dfs(root, root.val)
        return self.count
