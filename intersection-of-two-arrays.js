/*
 Given two arrays, write a function to compute their intersection.

 Example:
 Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

 Note:
 Each element in the result must be unique.
 The result can be in any order.

 https://leetcode.com/problems/intersection-of-two-arrays/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var len, common = {}, result = [];
  if (nums1 && nums2) {
    len = nums2.length;
    for (var i = 0; i < len; i++) {
      var v = nums2[i];
      if (nums1.indexOf(v) > -1) {
        if (!common[v]) {
          result.push(v);
          common[v] = true;
        }
      }
    }
  }
  return result;
};