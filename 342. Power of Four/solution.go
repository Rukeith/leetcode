func isPowerOfFour(num int) bool {
	for num >= 4 {
		if num%4 == 0 {
			num = num / 4
		} else {
			return false
		}
	}
	return num == 1
}