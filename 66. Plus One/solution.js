/**
 * @param {number[]} digits
 * @return {number[]}
 * 
 * 66. Plus One
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 * The digits are stored such that the most significant digit is at the head of the list.
 * 
 * Example:
 * [1, 9] --> [2, 0]
 * [2, 3, 2] --> [2, 3, 3]
 * 
 * URL:
 * https://leetcode.com/problems/plus-one/description/
 */
var plusOne = function(digits) {
  let len = digits.length - 1, carry = 1;

	while (len > -1) {
		if (digits[len] + carry > 9) {
			digits[len] = 0;
			carry = 1;
		} else {
			digits[len] += carry;
			carry = 0;
		}
		len--;
	}
	if (carry === 1) {
		digits.unshift(1);
	}
	return digits;
};