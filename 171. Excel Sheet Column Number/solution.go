func titleToNumber(s string) int {
	sum := 0
	for _, v := range s {
		num := int(byte(v)-'A') + 1
		sum = 26*sum + num
	}
	return sum
}