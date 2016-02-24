/*
 Given an integer, convert it to a roman numeral.
 Input is guaranteed to be within the range from 1 to 3999.

 https://leetcode.com/problems/integer-to-roman/
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  /*
   https://en.wikipedia.org/wiki/Roman_numerals
   http://baike.baidu.com/view/42061.htm
   */
  var M = ["", "M", "MM", "MMM"];
  var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return M[Math.floor(num / 1000)] +
    C[Math.floor((num % 1000) / 100)] +
    X[Math.floor((num % 100) / 10)] + I[Math.floor(num % 10)];
};