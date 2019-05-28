type MyStack struct {
	Queue    []int
	Height   int
	Capacity int
}

/** Initialize your data structure here. */
func Constructor() MyStack {
	return MyStack{Queue: []int{}, Height: 0, Capacity: 0}
}

/** Push element x onto stack. */
func (obj *MyStack) Push(x int) {
	if obj.Height == obj.Capacity {
		obj.Queue = append(obj.Queue, x)
		obj.Height++
		obj.Capacity++
	} else {
		obj.Queue[obj.Height] = x
		obj.Height++
	}
}

/** Removes the element on top of the stack and returns that element. */
func (obj *MyStack) Pop() int {
	if obj.Height > 0 {
		obj.Height--
		return obj.Queue[obj.Height]
	} else {
		panic("Stack is empty!")
	}
}

/** Get the top element. */
func (obj *MyStack) Top() int {
	if obj.Height > 0 {
		return obj.Queue[obj.Height-1]
	} else {
		panic("Stack is empty!")
	}
}

/** Returns whether the stack is empty. */
func (obj *MyStack) Empty() bool {
	return obj.Height == 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.Empty();
 */