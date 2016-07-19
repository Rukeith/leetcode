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
 
 
const addTwoNumbers = (l1, l2) => {
    let line1 = null, line2 = null, temp = [], answer = null;
    
    function ListNode(filter) {
        temp.push(filter.val);
        if (filter.next !== null)
            ListNode(filter.next);
        return temp;
    }
    
    function reverseToNumber(re) {
        let tempNumber = 0, reLength = re.length - 1;
        for (let i = reLength; i > -1; i--)
            tempNumber = re[i] * Math.pow(10, i) + tempNumber;
        return tempNumber;
    }
    line1 = reverseToNumber(ListNode(l1));
    temp = [];
    line2 = reverseToNumber(ListNode(l2));
    
    answer = (line1 + line2).toString().split("");
    temp = [];
    for (let i = (answer.length - 1); i > -1; i--) {
        temp.push(Number(answer[i]));
    }
    answer = temp;
    return answer;
};