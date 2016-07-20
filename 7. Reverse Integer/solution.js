/**
 * 7. Reverse Integer
 * Reverse digits of an integer.
 * Have you thought about this?
 * Here are some good questions to ask before coding.
 * Bonus points for you if you have already thought through this!
 * If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
 * Did you notice that the reversed integer might overflow?
 * Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows.
 * How should you handle such cases?
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 *
 * Example:
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 *
 * URL:
 * https://leetcode.com/problems/reverse-integer/
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0;
    var tempString = x.toString().split("");
    var temp = [];
    var answer = 0;
    var positve = (tempString[0] !== "-") ? true : false;

    if (!positve)
        tempString.splice(0, 1);

    for (var i = (tempString.length - 1); i > -1; i--) {
        if (Number(tempString[i]) !== 0)
            answer = answer + Number(tempString[i]) * Math.pow(10, i);
    }
    if (!positve)
        answer = 0 - answer;
    return answer;
};

// console.log(reverse(321));
