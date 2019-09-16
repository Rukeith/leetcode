func matrixReshape(nums [][]int, r int, c int) [][]int {
	if len(nums) == 0 || len(nums[0]) == 0 {
		return nums
	}

	var (
		rows = len(nums)
		cols = len(nums[0])
	)

	if rows*cols != r*c || rows == r && cols == c {
		return nums
	}

	res := make([][]int, 0)
	for i := 0; i < r; i++ {
		res = append(res, make([]int, c))
	}

	for i := 0; i < rows*cols; i++ {
		res[i/c][i%c] = nums[i/cols][i%cols]
	}

	return res
}