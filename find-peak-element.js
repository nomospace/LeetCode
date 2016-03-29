/*
 A peak element is an element that is greater than its neighbors.
 Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.
 The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
 You may imagine that num[-1] = num[n] = -∞.
 For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

 https://leetcode.com/problems/find-peak-element/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// Binary Search: recursion
var findPeakElement = function(nums) {
  var Helper = function(n, low, high) {
    if (low === high)
      return low;
    else {
      var mid1 = parseInt((low + high) / 2);
      var mid2 = mid1 + 1;
      if (n[mid1] > n[mid2])
        return Helper(n, low, mid1);
      else
        return Helper(n, mid2, high);
    }
  };
  return Helper(nums, 0, nums.length - 1);
};

// Binary Search: iteration
var findPeakElement = function(nums) {
  var low = 0;
  var high = nums.length - 1;

  while (low < high) {
    var mid1 = parseInt((low + high) / 2);
    var mid2 = mid1 + 1;
    if (nums[mid1] < nums[mid2]) {
      low = mid2;
    }
    else {
      high = mid1;
    }
  }
  return low;
};

// Sequential Search:
var findPeakElement = function(nums) {
  var length = nums.length;
  for (var i = 1; i < length; i++) {
    if (nums[i] < nums[i - 1]) {
      return i - 1;
    }
  }
  return length - 1;
};
