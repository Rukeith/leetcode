import "strings"

func findWords(words []string) []string {
	word := []string{}
	table := map[string]int{"a": 2, "s": 2, "d": 2, "f": 2, "g": 2, "h": 2, "j": 2, "k": 2, "l": 2, "z": 1, "x": 1, "c": 1, "v": 1, "b": 1, "n": 1, "m": 1, "q": 3, "w": 3, "e": 3, "r": 3, "t": 3, "y": 3, "u": 3, "i": 3, "o": 3, "p": 3}
	for k, v := range words {

		v = strings.ToLower(v)
		line := table[string(v[0])]

		for i := 1; i < len(v); i++ {
			if table[string(v[i])] != line {
				k = -1
				break
			}
		}
		if k != -1 {
			word = append(word, words[k])
		}
	}
	return word
}