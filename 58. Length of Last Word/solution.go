func lengthOfLastWord(s string) int {
    s = strings.TrimSpace(s)
	ls := len(s)
	for i := ls - 1; i >= 0; i-- {
		if s[i] == ' ' {
			return ls - i - 1
		}
	}
	return ls
}