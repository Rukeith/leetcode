func isPalindrome(x int) bool {
	if x < 0 || x%10 == 0 && x != 0 {
		return false
	}

	result := 0
	for c := x; c > 0; {
		result = result*10 + c%10
		c /= 10
	}

	return result == x
}

// import "strconv"

// func isPalindrome(x int) bool {
// 	if x < 0 {
// 		return false
// 	}

// 	s := strconv.Itoa(x)
// 	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
// 		if s[i] != s[j] {
// 			return false
// 		}
// 	}

// 	return true
// }