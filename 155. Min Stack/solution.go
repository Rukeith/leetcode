type MinStack struct {
	data []int
	min  []int
}

/** initialize your data structure here. */
func Constructor() MinStack {
	return MinStack{
		data: make([]int, 0, 8),
		min:  make([]int, 0, 8),
	}
}

func (this *MinStack) Push(x int) {
	this.data = append(this.data, x)

	if len(this.data) == 1 {
		this.min = append(this.min, x)
		return
	}

	currentMin := this.min[len(this.min)-1]
	if currentMin > x {
		this.min = append(this.min, x)
	} else {
		this.min = append(this.min, currentMin)
	}
}

func (this *MinStack) Pop() {
	this.data = this.data[:len(this.data)-1]
	this.min = this.min[:len(this.min)-1]
}

func (this *MinStack) Top() int {
	return this.data[len(this.data)-1]
}

func (this *MinStack) GetMin() int {
	return this.min[len(this.min)-1]
}

/**
* Your MinStack object will be instantiated and called as such:
* obj := Constructor();
* obj.Push(x);
* obj.Pop();
* param_3 := obj.Top();
* param_4 := obj.GetMin();
 */