import "sort"

func findRadius(houses []int, heaters []int) (max int) {
	sort.Ints(houses)
	sort.Ints(heaters)
	for i, j := 0, 0; i < len(houses); i++ {
		if houses[i] > heaters[j] {
			for j+1 < len(heaters) && abs(houses[i]-heaters[j]) >= abs(houses[i]-heaters[j+1]) {
				j++
			}
		}

		d := abs(houses[i] - heaters[j])
		if max < d {
			max = d
		}
	}
	return
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}