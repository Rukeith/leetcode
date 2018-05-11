# [561. Array Partition I](https://leetcode.com/problems/array-partition-i/description)
Given an array of **2n** integers, your task is to group these integers into **n** pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

**Example 1:**
```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```
**Note:**
1. n is a positive integer, which is in the range of [1, 10000].
2. All the integers in the array will be in the range of [-10000, 10000].

**Hide Hint 1**  
Obviously, brute force won't help here. Think of something else, take some example like 1,2,3,4.

**Hide Hint 2**  
How will you make pairs to get the result? There must be some pattern.

**Hide Hint 3**  
Did you observe that- Minimum element gets add into the result in sacrifice of maximum element.

**Hide Hint 4**  
Still won't able to find pairs? Sort the array and try to find the pattern.
