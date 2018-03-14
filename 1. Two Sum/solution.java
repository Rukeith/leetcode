public class Solution {
  public int[] twoSum(int[] nums, int target) {
    int[] ret = new int[2];
    HashMap<Integer, Integer> hashMap = new HashMap<>();
    for (int i = 0, length = nums.length; i < length; i++) {
      if (hashMap.containsKey(target - nums[i])) {
        ret[0] = hashMap.get(target - nums[i]);
        ret[1] = i;
        break;
      }
      hashMap.put(nums[i], i);
    }
    return ret;
  }
}
// class Solution {
//   public int[] twoSum(int[] nums, int target) {
//     int[] map = new int[20050];
//     int size = 4;
//     for (int i = 0; i < nums.length; i++) {
//       map[nums[i] + size] = (i + 1);
//       int diff = target - nums[i + 1] + size;
//       if (diff < 0) continue;
//       int d = map[diff];
//       if (d > 0) return new int[]{d - 1, i + 1};
//     }
//     return null;
//   }
// }