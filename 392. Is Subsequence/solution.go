func isSubsequence(s string, t string) bool {
	p := 0
	ls := len(s)
	if ls == 0 {
		return true
	}
	if t == "" {
		return false
	}
	for i := 0; i < len(t); i++ {
		if s[p] == t[i] {
			p++
			if p >= ls {
				return true
			}
		}
	}
	return false
}