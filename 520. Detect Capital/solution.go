import "strings"

func detectCapitalUse(word string) bool {
	return strings.ToLower(word) == word || strings.ToUpper(word) == word || strings.ToLower(word[1:]) == word[1:]
}