/*
 Implement atoi to convert a string to an Number.
 https://leetcode.com/problems/string-to-Number-atoi/
 */
/**
 * @param {string} str
 * @return {number}
 * TODO
 */
var myAtoi = function(str) {
  var INT_MAX = 2147483647, INT_MIN = -2147483648,
    number = parseInt(str);
  if (isNaN(number)) {
    return 0;
  }
  if (number > INT_MAX) {
    return INT_MAX;
  } else if (number < INT_MIN) {
    return INT_MIN;
  }
  return number;
};

//var myAtoi = function(str) {
//  var index = 0, sign = 1, total = 0;
//  var INT_MAX = 2147483647, INT_MIN = -2147483648;
//  //1. Empty string
//  if (str.length === 0) return 0;
//
//  //2. Remove Spaces
//  while (str.charAt(index) === ' ' && index < str.length) {
//    index++;
//  }
//
//  //3. Handle signs
//  if (str.charAt(index) === '+' || str.charAt(index) === '-') {
//    sign = str.charAt(index) === '+' ? 1 : -1;
//    index++;
//  }
//
//  //4. Convert number and avoid overflow
//  while (index < str.length) {
//    var digit = str.charAt(index) - '0';
//    if (digit < 0 || digit > 9) break;
//
//    //check if total will be overflow after 10 times and add digit
//    if (INT_MAX / 10 < total || INT_MAX / 10 === total && INT_MAX % 10 < digit) {
//      return sign === 1 ? INT_MAX : INT_MIN;
//    }
//
//    total = 10 * total + digit;
//    index++;
//  }
//  return total * sign;
//};