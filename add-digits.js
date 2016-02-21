/*
 Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

 For example:

 Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

 Follow up:
 Could you do it without any loop/recursion in O(1) runtime?

 Hint:

 A naive implementation of the above process is trivial. Could you come up with other methods?
 What are all the possible results?
 How do they occur, periodically or randomly?
 You may find this Wikipedia article useful.

 See:
 https://en.wikipedia.org/wiki/Digital_root
 http://www.flyingcoloursmaths.co.uk/a-neat-number-trick-digital-roots-and-modulo-9-arithmetic

 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // Significance and formula of the digital root
  return (num - 1) % 9 + 1;
};