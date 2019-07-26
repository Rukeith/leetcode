func findAnagrams(s string, p string) []int {
	if len(s) < len(p) {
		return make([]int, 0)
	}

	var count [26]int
	matches := 0
	result := make([]int, 0, 5)
	for i := 0; i < len(p); i++ {
		count[p[i]-'a']++
	}

	l := 0
	for r := 0; r < len(s); r++ {
		count[s[r]-'a']--
		if (count[s[r]-'a']) >= 0 {
			matches++
		}

		if r >= len(p) {
			count[s[l]-'a']++
			if (count[s[l]-'a']) > 0 {
				matches--
			}
			l++
		}

		if matches == len(p) {
			result = append(result, l)
		}
	}

	return result
}