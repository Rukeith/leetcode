func firstUniqChar(s string) int {
	dic := [26]int{}
	for _, c := range s {
		dic[c-'a']++
	}
	for i, c := range s {
		if dic[c-'a'] == 1 {
			return i
		}
	}
	return -1
}