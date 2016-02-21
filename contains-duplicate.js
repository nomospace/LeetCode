/*
 Given an array of integers, find if the array contains any duplicates.
 Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

 https://leetcode.com/problems/contains-duplicate/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var i = 0, map = {}, n = nums.length;
  for (i; i < n; i++) {
    var key = nums[i];
    if (map[key]) {
      return true;
    } else {
      map[key] = 1;
    }
  }
  return false;
};