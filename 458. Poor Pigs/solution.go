import (
	"math"
)

func poorPigs(buckets int, minutesToDie int, minutesToTest int) int {
	if buckets <= 0 {
		return 0
	}

	if minutesToTest/minutesToDie < 1 {
		return 0 // no answer
	}

	if minutesToTest/minutesToDie == 1 {
		return int(math.Ceil(math.Log2(float64(buckets))))
	}

	base := minutesToTest/minutesToDie + 1
	n := math.Log(float64(buckets)) / math.Log(float64(base))
	n = math.Ceil(n)
	return int(n)
}