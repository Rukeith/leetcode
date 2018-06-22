class Solution:
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        area = 0
        left, right = 0, len(height) - 1
        
        while right > left:
            if height[right] >= height[left]:
                tmp = (right - left) * height[left]
                left += 1
            else:
                tmp = (right - left) * height[right]
                right -= 1
            if tmp > area:
                area = tmp
            
        return area