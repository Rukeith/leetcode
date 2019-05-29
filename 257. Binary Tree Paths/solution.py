# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
        answer_list = list()
        self._binary_tree_paths(root, list(), answer_list)
        return answer_list

    def _is_leaf(self, node: TreeNode):
        return node.left is None and node.right is None

    def _binary_tree_paths(self,
                           node: TreeNode,
                           curr_path: List[int],
                           answer_list: List[str]) -> None:
        if node is not None and self._is_leaf(node):
            curr_path.append(node.val)
            answer_list.append("->".join(list(map(str, curr_path))))
            curr_path.pop()
        elif node is not None:
            curr_path.append(node.val)
            self._binary_tree_paths(node.left, curr_path, answer_list)
            self._binary_tree_paths(node.right, curr_path, answer_list)
            curr_path.pop()
