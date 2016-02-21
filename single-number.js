/*
 Given an array of integers, every element appears twice except for one. Find that single one.

 Note:
 Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var length = nums.length;
  if (length !== 0) {
    /**
     *
     * [17,12,5,-6,12,4,17,-5,2,-3,2,4,5,16,-3,-4,15,15,-4,-5,-6].sort(function(n,m){return n-m;})
     * [-6,-6,-5,-5,-4,-4,-3,-3,2,2,4,4,5,5,12,12,15,15,16,17,17]
     *
     * But, here's a trap when you use `return n>m`:
     * [17,12,5,-6,12,4,17,-5,2,-3,2,4,5,16,-3,-4,15,15,-4,-5,-6].sort(function(n,m){return n>m;})
     * [2,-6,-6,5,5,4,-5,-5,2,-3,-4,4,-4,-3,12,12,15,15,16,17,17]
     *
     */
    nums.sort(function(n, m) {
      return n - m;
    });

    if (length === 1) {
      return nums[0];
    }

    for (var i = 0; i <= length / 2; i++) {
      // compare the adjacent number, return the previous one once they're not equal.
      if (nums[2 * i] !== nums[2 * i + 1]) {
        return nums[2 * i];
      }
    }
  }
};