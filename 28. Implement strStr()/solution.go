func strStr(haystack string, needle string) int {
	if haystack == needle {
		return 0
    }

	found := -1
	total := len(needle)
	for i := 0; i < len(haystack) - total + 1; i++ {
		if haystack[i:i + total] == needle {
			found = i
			break
		}
	}
	return found
}