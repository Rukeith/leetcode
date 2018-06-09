/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func addTwoNumbers(l1, l2 *ListNode) *ListNode {
	p := l1
	q := l2
	for {
		if p == nil {
			break
		}
		n := p.Val
		if q != nil {
			n += q.Val
		}
		p.Val = n % 10
		if n >= 10 {
			if p.Next == nil {
				p.Next = &ListNode{}
			}
			p.Next.Val++
		}
		if p.Next == nil && q != nil {
			p.Next = q.Next
			break
		}
		p = p.Next
		if q != nil {
			q = q.Next
		}
	}
	return l1
}