/*
 Given an array of integers, every element appears three times except for one. Find that single one.

 Note:
 Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

 https://leetcode.com/problems/single-number-ii/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var results = [], map = {}, total = nums.length;
  for (var i = 0; i < total; i++) {
    var k = nums[i], v = map[k];
    if (!v) {
      map[k] = 1;
    } else {
      map[k] += map[k];
    }
  }
  for (k in map) {
    k && map[k] === 1 && results.push(parseInt(k));
  }

  var len = results.length;
  return len === 1 ? results[0] : 0;
};