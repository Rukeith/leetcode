import "strings"

func wordPattern(pattern string, str string) bool {
	s := strings.Split(str, " ")
	l := len(pattern)
	if l != len(s) {
		return false
	}
	for i := 0; i < l; i++ {
		for j := i; j < l; j++ {
			if (pattern[i] == pattern[j] && s[i] == s[j]) || (pattern[i] != pattern[j] && s[i] != s[j]) {
				continue
			} else {
				return false
			}
		}
	}
	return true
}