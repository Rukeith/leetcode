# [566. Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/)

In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two **positive** integers **r** and **c** representing the **row** number and **column** number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same **row-traversing** order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

**Example 1:**

    Input:
    nums =
    [[1,2],
    [3,4]]
    r = 1, c = 4
    Output:
    [[1,2,3,4]]
    Explanation:
    The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

**Example 2:**

    Input:
    nums =
    [[1,2],
    [3,4]]
    r = 2, c = 4
    Output:
    [[1,2],
    [3,4]]
    Explanation:
    There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.

**Note:**

1. The height and width of the given matrix is in range [1, 100].
2. The given r and c are all positive.

**Hide Hint 1**

Do you know how 2d matrix is stored in 1d memory? Try to map 2-dimensions into one.

**Hide Hint 2**

M[i][j]=M[n*i+j] , where n is the number of cols. This is the one way of converting 2-d indices into one 1-d index. Now, how will you convert 1-d index into 2-d indices?

**Hide Hint 3**

Try to use division and modulus to convert 1-d index into 2-d indices.

**Hide Hint 4**

M[i] => M[n/i][n%i] Will it result in right mapping? Take some example and check this formulae.
