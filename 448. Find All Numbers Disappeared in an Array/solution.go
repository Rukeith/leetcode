func findDisappearedNumbers(nums []int) []int {
	flags := make([]int, len(nums)+1)
	for _, num := range nums {
		flags[num]++
	}

	res := make([]int, 0)
	for i, flag := range flags {
		if i != 0 && flag == 0 {
			res = append(res, i)
		}
	}
	return res
}