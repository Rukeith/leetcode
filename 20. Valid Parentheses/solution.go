func isValid(s string) bool {
	stack := []rune{}
	for _, r := range s {
        if r == '(' || r == '{' || r == '[' {
            stack = append(stack, r)
            continue
        }
        if (r == ')' || r == '}' || r == ']') && len(stack) == 0 {
            return false
        }
        if r == ')' && stack[len(stack) - 1] != '(' {
            return false
        }
        if r == '}' && stack[len(stack) - 1] != '{' {
            return false
        }
        if r == ']' && stack[len(stack) - 1] != '[' {
            return false
        }
        stack = stack[:len(stack) - 1]
	}
	return len(stack) == 0
}