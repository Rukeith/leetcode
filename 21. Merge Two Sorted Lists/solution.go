/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	var b, l *ListNode
	if l1 == nil { return l2 }
	if l2 == nil { return l1 }

	if l1.Val <= l2.Val {
		l = l1
		l1 = l1.Next
	} else {
		l = l2
		l2 = l2.Next
	}

	b = l

	for ; l1 != nil; l1 = l1.Next {
		for ; l2 != nil && l2.Val < l1.Val; l2 = l2.Next {
			l.Next = l2
			l = l.Next
		}

		l.Next = l1
		l = l.Next
	}

	if l2 != nil {
		l.Next = l2
	} else {
		l.Next = nil
	}

	return b    
}