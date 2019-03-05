func maxSubArray(nums []int) int {
	if len(nums) == 0 { return 0 }
	var res, sum = math.MinInt32, 0
	for _, v := range nums {
			sum += v
			if sum > res { res = sum }
			if sum < 0 { sum = 0 }
	}
	
	return res
}