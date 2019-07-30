import "sort"

func findContentChildren(g []int, s []int) int {
	sort.Ints(g)
	sort.Ints(s)

	var j, flag int
	for i := 0; i < len(g); i++ {
		for j < len(s) && s[j] < g[i] {
			j++
		}

		if j >= len(s) {
			break
		} else {
			flag++
			j++
		}
	}
	return flag
}