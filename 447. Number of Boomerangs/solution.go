func numberOfBoomerangs(points [][]int) int {
	result := 0
	for i, pointI := range points {
		hashMap := make(map[int]int, len(points))
		for j, pointJ := range points {
			if i == j {
				continue
			}
			distance := (pointJ[0]-pointI[0])*(pointJ[0]-pointI[0]) + (pointJ[1]-pointI[1])*(pointJ[1]-pointI[1])

			if n, exist := hashMap[distance]; exist {
				result += n * 2
				hashMap[distance]++
			} else {
				hashMap[distance] = 1
			}
		}
	}

	return result
}