"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""


class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        self.ret = []
        self.helper(root)
        return self.ret

    def helper(self, node: 'Node'):
        if not node:
            return
        self.ret.append(node.val)
        for n in node.children:
            self.helper(n)
