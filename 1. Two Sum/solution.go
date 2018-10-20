func twoSum(nums []int, target int) []int {
	lookup := make(map[int]int)
	for i, num := range nums {
		if j, ok := lookup[target-num]; ok {
			return []int{j, i}
		}
		lookup[nums[i]] = i
	}
	return nil
}

/* 
 * 解題思維：
 * 使用 map 將所有組合比對
 * 如果比對到一組就馬上回傳
 */