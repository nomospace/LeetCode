/*
 Given an integer, write a function to determine if it is a power of three.
 https://leetcode.com/problems/power-of-three/
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  // Recursive Solution
  return n > 0 && (n === 1 || (n % 3 === 0 && isPowerOfThree(n / 3)));

  // Iterative Solution
  //if (n > 1) {
  //  while (n % 3 === 0) n /= 3;
  //}
  //return n === 1;

  // Math Solution
  //return n === 0 ? false : n === Math.pow(3, Math.round(Math.log(n) / Math.log(3)));
  //return (Math.log10(n) / Math.log10(3)) % 1 === 0;

  // ...
};