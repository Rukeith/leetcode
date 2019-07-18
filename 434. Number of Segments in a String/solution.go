func countSegments(s string) int {
	var tot int

	for p := 0; p < len(s); p++ {
		if (p == 0 || s[p-1] == ' ') &&
			s[p] != ' ' {
			tot++
		}
	}

	return tot
}