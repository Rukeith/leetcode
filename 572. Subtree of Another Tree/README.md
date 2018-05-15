# [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/description)
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of **s**. A subtree of **s** is a tree consists of a node in **s** and all of this node's descendants. The tree **s** could also be considered as a subtree of itself.

**Example 1:**
```
Given tree s:

     3
    / \
   4   5
  / \
 1   2
```
Given tree t:
```
   4 
  / \
 1   2
```
Return **true**, because t has the same structure and node values with a subtree of s.
**Example 2:**
Given tree s:
```
     3
    / \
   4   5
  / \
 1   2
    /
   0
```
Given tree t:
```
   4
  / \
 1   2
```
Return **false**.

**Hide Hint 1**
Which approach is better here- recursive or iterative?
**Hide Hint 2**
If recursive approach is better, can you write recursive function with its parameters?
**Hide Hint 3**
Two trees s and t are said to be identical if their root values are same and their left and right subtrees are identical. Can you write this in form of recursive formulae?
**Hide Hint 4**
Recursive formulae can be: isIdentical(s,t)= s.val==t.val AND isIdentical(s.left,t.left) AND isIdentical(s.right,t.right)