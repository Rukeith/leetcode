func isPalindrome(x int) bool {
	if x < 0 || x % 10 == 0 && x != 0 {
		return false
	}
	
	result := 0
	for c := x; c > 0; {
		result = result * 10 + c % 10
		c /= 10
	}
	
	return result == x
}