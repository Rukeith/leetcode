import "fmt"

func readBinaryWatch(num int) []string {
	var output []string

	for hour := range make([]struct{}, 12) {
		for minute := range make([]struct{}, 60) {

			if countOnes(hour)+countOnes(minute) != num {
				continue
			}

			time := fmt.Sprintf("%d:%02d", hour, minute)
			output = append(output, time)
		}
	}

	return output
}

func countOnes(x int) int {
	ones := 0
	for ; x > 0; x >>= 1 {
		if x&1 > 0 {
			ones++
		}
	}
	return ones
}