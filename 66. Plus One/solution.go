func plusOne(digits []int) []int {
	plus := 1
	for i := len(digits) - 1; i >= 0; i-- {
		digits[i] += plus
		if digits[i] == 10 {
			digits[i] = 0
		} else {
			plus = 0
			break
		}
	}
	if plus == 1 {
		return append([]int{1}, digits...)
	}
	return digits
}