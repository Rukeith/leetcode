func findTheDifference(s string, t string) byte {
	var c = t[len(t)-1]
	for i := 0; i < len(t)-1; i++ {
		c ^= s[i]
		c ^= t[i]
	}
	return c
}
