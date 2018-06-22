func maxArea(height []int) int {
	max := 0
	left, right := 0, len(height)-1

	for right > left {
		temp := 0
		if dist := right - left; height[left] > height[right] {
			temp = dist * height[right]
			right--
		} else {
			temp = dist * height[left]
			left++
		}

		if temp > max {
			max = temp
		}
	}

	return max
}