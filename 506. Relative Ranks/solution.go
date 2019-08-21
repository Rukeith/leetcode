import (
	"sort"
	"strconv"
)

func findRelativeRanks(nums []int) []string {
	m := make(map[int]int)
	for i, v := range nums {
		m[v] = i
	}

	sort.Ints(nums)

	res := make([]string, len(nums))
	for i, v := range nums {
		rank := len(nums) - i
		res[m[v]] = rankS(rank)
	}
	return res
}

func rankS(r int) string {
	var s string
	switch r {
	case 1:
		s = "Gold Medal"
	case 2:
		s = "Silver Medal"
	case 3:
		s = "Bronze Medal"
	default:
		s = strconv.Itoa(r)
	}
	return s
}