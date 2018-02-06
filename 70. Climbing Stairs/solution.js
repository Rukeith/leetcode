/**
 * @param {number} n
 * @return {number}
 * 
 * 70. Climbing Stairs
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Note: Given n will be a positive integer.
 * 
 * Hints:
 * To reach nth step, what could have been your previous steps? (Think about the step sizes)
 * 
 * Example 1:
 * Input: 2
 * Output:  2
 * Explanation:  There are two ways to climb to the top.
 * 
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example 2:
 * Input: 3
 * Output:  3
 * Explanation:  There are three ways to climb to the top.
 * 
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * URL:
 * https://leetcode.com/problems/climbing-stairs/description/
 */
var climbStairs = function(n) {
  const T = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    T[i] = T[i - 1] + T[i - 2];
  }

  return T[n];
};