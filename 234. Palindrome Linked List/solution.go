/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverse(head *ListNode) *ListNode {
	var newHead *ListNode
	curr := &head
	for *curr != nil {
		entry := *curr
		*curr = entry.Next
		entry.Next = newHead
		newHead = entry
	}
	return newHead
}

func isPalindrome(head *ListNode) bool {
	dummyP, midP := head, head
	for dummyP != nil && dummyP.Next != nil {
		dummyP = dummyP.Next.Next
		midP = midP.Next
	}

	if dummyP != nil {
		midP = midP.Next
	}
	midP = reverse(midP)
	for midP != nil {
		if head.Val == midP.Val {
			head, midP = head.Next, midP.Next
			continue
		}
		return false
	}
	return true
}