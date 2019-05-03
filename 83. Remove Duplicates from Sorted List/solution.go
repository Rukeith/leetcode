/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
	begin := head
	for head != nil && head.Next != nil {
		for head.Next != nil && head.Val == head.Next.Val {
			head.Next = head.Next.Next
		}
		head = head.Next
	}
	return begin
}