func longestPalindrome(s string) int {
	count := make([]int, 256)
	for _, c := range s {
		count[int(c)]++
	}
	res := 0
	for _, times := range count {
		res += (times / 2) * 2
		if res%2 == 0 && times%2 == 1 {
			res++
		}
	}
	return res
}