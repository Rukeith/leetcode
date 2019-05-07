# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if root is None:
            return []

        result, current = [], [root]
        while current:
            next_level, values = [], []
            for node in current:
                values.append(node.val)
                if node.left:
                    next_level.append(node.left)

                if node.right:
                    next_level.append(node.right)

            current = next_level
            result.append(values)
        return result[::-1]
