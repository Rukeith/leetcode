type MyQueue struct {
	q []int
}

/** Initialize your data structure here. */
func Constructor() MyQueue {
	return MyQueue{
		q: []int{},
	}
}

/** Push element x to the back of queue. */
func (this *MyQueue) Push(x int) {
	q := []int{x}
	this.q = append(q, this.q...)
}

/** Removes the element from in front of queue and returns that element. */
func (this *MyQueue) Pop() int {
	v := this.q[len(this.q)-1]
	this.q = this.q[:len(this.q)-1]
	return v
}

/** Get the front element. */
func (this *MyQueue) Peek() int {
	return this.q[len(this.q)-1]
}

/** Returns whether the queue is empty. */
func (this *MyQueue) Empty() bool {
	if len(this.q) == 0 {
		return true
	}
	return false
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Peek();
 * param_4 := obj.Empty();
 */