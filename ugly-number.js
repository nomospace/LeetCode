/*
 Write a program to check whether a given number is an ugly number.
 Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
 Note that 1 is typically treated as an ugly number.

 https://leetcode.com/problems/ugly-number/
 */
/**
 * @param {number} num
 * @return {boolean}
 * TODO
 */
var isUgly = function(num) {
  /*
   Just divide by 2, 3 and 5 as often as possible and then check whether we arrived at 1.
   Also try divisor 4 if that makes the code simpler / less repetitive.

   https://leetcode.com/discuss/52703/2-4-lines-every-language
   */
  if (num > 0)
    for (var i = 2; i < 6; i++) {
      while (num % i === 0) {
        num /= i;
      }
    }
  return num === 1;
};