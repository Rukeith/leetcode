func arrayPairSum(nums []int) int {
	res := 0
	buckets := [20001]int{}

	for _, v := range nums {
		buckets[v+10000]++
	}

	odd := true
	for i := 0; i < len(buckets); i++ {
		for buckets[i] > 0 {
			if odd {
				res += (i - 10000)
			}

			odd = !odd
			buckets[i]--
		}
	}

	return res
}