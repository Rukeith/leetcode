func canConstruct(ransomNote string, magazine string) bool {
	lc := make([]int, 200)
	for x := 0; x < len(magazine); x++ {
		c := int(magazine[x])
		if lc[c] == 0 {
			lc[c] = 1
		} else {
			lc[c]++
		}
	}
	for x := 0; x < len(ransomNote); x++ {
		c := int(ransomNote[x])
		if lc[c] != 0 {
			lc[c]--
		} else {
			return false
		}
	}
	return true
}