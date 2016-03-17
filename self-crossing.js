/*
 You are given an array x of n positive numbers.
 You start at point (0,0) and moves x[0] metres to the north, then x[1] metres to the west, x[2] metres to the south, x[3] metres to the east and so on.
 In other words, after each move your direction changes counter-clockwise.

 Example 1:
 Given x = [2, 1, 1, 2],
 ┌───┐
 │   │
 └───┼──>
 │

 Return true (self crossing)

 Example 2:
 Given x = [1, 2, 3, 4],
 ┌──────┐
 │      │
 │
 │
 └────────────>

 Return false (not self crossing)
 Example 3:
 Given x = [1, 1, 1, 1],
 ┌───┐
 │   │
 └───┼>

 Return true (self crossing)

 https://leetcode.com/problems/self-crossing/
 */
/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function(x) {
  // http://www.cnblogs.com/grandyang/p/5216856.html
  var size = x.length;
  // Categorize the self-crossing scenarios, there are 3 of them:
  // 1. Fourth line crosses first line and works for fifth line crosses second line and so on...
  // 2. Fifth line meets first line and works for the lines after
  // 3. Sixth line crosses first line and works for the lines after
  for (var i = 3; i < size; i++) {
    //Fourth line crosses first line and onward
    if (x[i] >= x[i - 2] && x[i - 1] <= x[i - 3]) return true;
    // Fifth line meets first line and onward
    if (i >= 4) {
      if (x[i - 1] === x[i - 3] && x[i] + x[i - 4] >= x[i - 2]) return true;
    }
    // Sixth line crosses first line and onward
    if (i >= 5) {
      if (x[i - 2] - x[i - 4] >= 0 && x[i] >= x[i - 2] - x[i - 4] && x[i - 1] >= x[i - 3] - x[i - 5] && x[i - 1] <= x[i - 3]) return true;
    }
  }
  return false;
};