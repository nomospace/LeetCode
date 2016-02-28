/*
 Given an integer matrix, find the length of the longest increasing path.
 From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

 Example 1:
 nums = [
 [9,9,4],
 [6,6,8],
 [2,1,1]
 ]
 Return 4
 The longest increasing path is [1, 2, 6, 9].

 Example 2:
 nums = [
 [3,4,5],
 [3,2,6],
 [2,2,1]
 ]
 Return 4
 The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

 https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 */
/**
 * @param {number[][]} matrix
 * @return {number}
 * TODO
 */
var longestIncreasingPath = function(matrix) {
  // http://bookshadow.com/weblog/2016/01/20/leetcode-longest-increasing-path-matrix/
  if (!matrix || !matrix[0]) {
    return 0;
  }

  var dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  var dfs = function(matrix, i, j, m, n, cache) {
    if (cache[i][j] !== 0) return cache[i][j];
    var max = 1;
    // https://josephscott.org/archives/2014/10/javascript-performance-for-vs-foreach/
    // The for loop consistently came out over 4 times faster than the foreach.
    // `forEach` sucks.
    dirs.forEach(function(dir) {
      var x = i + dir[0], y = j + dir[1];
      if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]) return;
      var len = 1 + dfs(matrix, x, y, m, n, cache);
      max = Math.max(max, len);
    });
    cache[i][j] = max;
    return max;
  };

  var makeEmptyMatrix = function(x, y) {
    var r = [];
    for (var i = 0; i < x; i++) {
      r[i] = [];
      for (var j = 0; j < y; j++) {
        r[i][j] = 0;
      }
    }
    return r;
  };

  var m = matrix.length, n = matrix[0].length;
  var cache = makeEmptyMatrix(m, n);
  var max = 1;
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      var len = dfs(matrix, i, j, m, n, cache);
      max = Math.max(max, len);
    }
  }
  return max;
};