func longestCommonPrefix(strs []string) string {

	if len(strs) == 0 {
		return ""
	}

	prefix := strs[0]
	for i := 1; i < len(strs); i++ {
		for strings.HasPrefix(strs[i], prefix) == false {
			prefix = string([]rune(prefix)[:len(prefix) - 1])
		}
	}

	return prefix
}