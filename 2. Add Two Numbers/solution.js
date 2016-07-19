/**
 * 2. Add Two Numbers
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8

 * URL:
 * https://leetcode.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
// var l1 = {
//     val: 2,
//     next: { 
//         val: 4,
//         next: {
//             val: 3,
//             next: null
//         }
//     }
// }

// var l2 = {
//     val: 5,
//     next: { 
//         val: 6,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// }

var addTwoNumbers = function(l1, l2) {
    var line1 = null, line2 = null, temp = [], answer = null;
    
    function ListNode(filter) {
        temp.push(filter.val);
        if (filter.next !== null)
            ListNode(filter.next);
        return temp;
    }
    
    function reverseToNumber(re) {
        var tempNumber = 0, reLength = re.length - 1;
        for (var i = reLength; i > -1; i--)
            tempNumber = re[i] * Math.pow(10, i) + tempNumber;
        return tempNumber;
    }
    line1 = reverseToNumber(ListNode(l1));
    temp = [];
    line2 = reverseToNumber(ListNode(l2));
    
    answer = line1 + line2;
    answer = answer.toString().split("");
    temp = [];
    for (var i = (answer.length - 1); i > -1; i--) {
        temp.push(Number(answer[i]));
    }
    answer = temp;
    return answer;
};

// console.log(addTwoNumbers(l1, l2));