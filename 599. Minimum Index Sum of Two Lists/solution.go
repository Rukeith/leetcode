func findRestaurant(list1 []string, list2 []string) []string {
	AndyMap := make(map[string]int)
	for idx, item := range list1 {
		AndyMap[item] = idx
	}

	minIndex := len(list1) + len(list2)
	ret := make([]string, 0)
	for idx, item := range list2 {
		if value, ok := AndyMap[item]; ok {
			curIndex := idx + value

			if curIndex < minIndex {
				ret = []string{item}
				minIndex = curIndex
			} else if curIndex == minIndex {
				ret = append(ret, item)
			}
		}
	}
	return ret
}