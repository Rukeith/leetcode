func addDigits(num int) int {
	if num < 10 {
		return num
	}

	if r := num % 9; r == 0 {
		return 9
	} else {
		return r
	}
}