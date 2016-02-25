/*
 Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 For example, given n = 3, a solution set is:
 "((()))", "(()())", "(())()", "()(())", "()()()"

 https://leetcode.com/problems/generate-parentheses/
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // TODO DFS Depth-first search
  // https://en.wikipedia.org/wiki/Depth-first_search
  var result = [];
  if (n <= 0) {
    return result;
  }

  var dfs = function(array, item, left, right) {
    if (left > right) {
      // deal with ")("
      return;
    }
    if (left === 0 && right === 0) {
      array.push(item);
      return;
    }
    if (left > 0) {
      dfs(array, item + '(', left - 1, right);
    }
    if (right > 0) {
      dfs(array, item + ')', left, right - 1);
    }
  };

  dfs(result, '', n, n);

  return result;
};