/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	cin := 0
	t1, t2 := l1, l2
	var head *ListNode
	if t1 != nil && t2 != nil {
		head, cin = fullAdder(t1.Val, t2.Val, cin)
		t1, t2 = t1.Next, t2.Next
	}
	currNode := head
	for t1 != nil && t2 != nil {
		currNode.Next, cin = fullAdder(t1.Val, t2.Val, cin)
		currNode, t1, t2 = currNode.Next, t1.Next, t2.Next
	}

	var remain *ListNode
	if t1 != nil {
		remain = t1
	} else {
		remain = t2
	}

	for remain != nil {
		currNode.Next, cin = fullAdder(remain.Val, 0, cin)
		currNode, remain = currNode.Next, remain.Next
	}

	if cin != 0 {
		currNode.Next = &ListNode{Val: cin}
	}

	return head
}

func fullAdder(a, b, cin int) (newNode *ListNode, newCin int) {
	newNode = new(ListNode)
	sum := a + b + cin
	newNode.Val = sum % 10
	newCin = sum / 10
	return
}