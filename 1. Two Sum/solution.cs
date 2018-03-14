public class Solution {
  public int[] TwoSum(int[] nums, int target) {
    Dictionary<int, int> table = new Dictionary<int, int>();
    for (int i = 0; i < nums.Length; i++) {
      if (table.ContainsKey(target - nums[i])) {
        int x = table[(target - nums[i])];
        return new int[]{x, i};
      } else if(!table.ContainsKey(nums[i])) {
        table.Add(nums[i], i);
      }
    }
    return new int[]{-1, -1};
  }
}