class Solution {
  func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
    guard nums.count > 1 else { return [] }
    var seen: [Int : Int] = [:]
    for i in 0..<nums.count {
      let val = nums[i]
      let numToFind = target - val
      if let idx = seen[numToFind] {
        return [idx, i]
      }
      seen[val] = i
    }
    return []
  }
}