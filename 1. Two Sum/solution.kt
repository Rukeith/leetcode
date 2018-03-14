class Solution {
  fun twoSum(nums: IntArray, target: Int): IntArray {
    val res = IntArray(2)
    val map = mutableMapOf<Int, Int>()
      
    for ((i, value) in nums.withIndex()) {
      map.get(target - value)?.let { j ->
        res[0] = j
        res[1] = i
        return res
      }      
      map[value] = i
    }
      
    return res
  }
}