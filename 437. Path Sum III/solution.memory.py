# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def pathSum(self, root: TreeNode, total: int) -> int:
        paths = 0
        if not root:
            return paths

        s = [(root, [])]
        while s:
            node, vals = s.pop()
            vals = [val + node.val for val in vals] + [node.val]

            if total in vals:
                paths += vals.count(total)
            if node.right:
                s.append((node.right, vals))
            if node.left:
                s.append((node.left, vals))

        return paths
