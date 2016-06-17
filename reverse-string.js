/*
 Write a function that takes a string as input and returns the string reversed.

 Example:
 Given s = "hello", return "olleh".

 https://leetcode.com/problems/reverse-string/
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  var result = [];
  if (s) {
    var length = s.length;
    for (var i = length - 1; i >= 0; i--) {
      result.push(s.charAt(i));
    }
  }
  return result.join('');
};