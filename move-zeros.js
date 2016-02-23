/*
 Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

 Note:
 You must do this in-place without making a copy of the array.
 Minimize the total number of operations.

 https://leetcode.com/problems/move-zeroes/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  /*
   Shift non-zero values as far forward as possible
   Fill remaining space with zeros
   */

  if (!nums || nums && nums.length === 0) {
    return;
  }

  var i, len = nums.length, insertPos = 0;
  for (i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[insertPos++] = nums[i];
    }
  }

  while (insertPos < len) {
    nums[insertPos++] = 0;
  }
};