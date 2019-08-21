# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def findMode(self, root: TreeNode) -> List[int]:
        if not root:
            return

        dic = {}

        def record(node):
            if not node:
                return
            if node.val not in dic:
                dic[node.val] = 1
            else:
                dic[node.val] += 1

            record(node.left)
            record(node.right)

        record(root)
        self.modes = []
        max_count = None

        for key, val in dic.items():
            if not max_count:
                self.modes.append(key)
                max_count = val
            elif val == max_count:
                self.modes.append(key)
            elif val > max_count:
                self.modes = [key]
                max_count = val

        return self.modes
