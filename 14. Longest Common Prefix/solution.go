func longestCommonPrefix(strs []string) string {
	if strs == nil || len(strs) == 0 || len(strs[0]) == 0 {
		return ""
	}

	max := 0
DONE:
	for i := 0; i < len(strs[0]); i++ {
		b := strs[0][i]
		for j := 1; j < len(strs); j++ {
			if len(strs[j]) == i {
				break DONE
			}
			if strs[j][i] != b {
				break DONE
			}
		}

		max++
	}
	return strs[0][0:max]
}