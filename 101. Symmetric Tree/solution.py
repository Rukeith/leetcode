# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def compare(self, lleft, rright):
        if (not lleft) and (not rright):
            return True
        elif (not lleft) or (not rright):
            return False
        else:
            if lleft.val != rright.val:
                return False
            else:
                return self.compare(lleft.left, rright.right) and self.compare(lleft.right, rright.left)

    def isSymmetric(self, root: TreeNode) -> bool:
        if not root:
            return True
        else:
            return self.compare(root.left, root.right)
