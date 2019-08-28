"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""


class Solution:
    def maxDepth(self, root: 'Node') -> int:
        self.maxDepth = 0

        def helper(root, curDepth):
            if not root:
                return

            curDepth += 1
            self.maxDepth = max(self.maxDepth, curDepth)
            for child in root.children:
                helper(child, curDepth)
        helper(root, 0)
        return self.maxDepth
