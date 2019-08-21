import (
	"strconv"
)

func convertToBase7(num int) string {
	if num < 0 {
		return "-" + convertToBase7(-num)
	}
	if num < 7 {
		return strconv.Itoa(num % 7)
	}
	return convertToBase7(num/7) + strconv.Itoa(num%7)
}