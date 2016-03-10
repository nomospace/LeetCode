/*
 Invert a binary tree.

 4
 /   \
 2     7
 / \   / \
 1   3 6   9
 to
 4
 /   \
 7     2
 / \   / \
 9   6 3   1

 https://leetcode.com/problems/invert-binary-tree/
 */
/**
 * Definition for a binary tree node.
 * function (val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {} root
 * @return {}
 */
var invertTree = function(root) {
  if (!root) return null;

  var tempRight = root.right;

  root.right = invertTree(root.left);
  root.left = invertTree(tempRight);
  return root;
};

/*
 The above solution is correct, but it is also bound to the application stack,
 which means that it's no so much scalable -
 (you can find the problem size that will overflow the stack and crash your application),
 so more robust solution would be to use stack data structure.
 */
var invertTree2 = function(root) {
  if (!root) return null;

  var stack = [root];

  while (stack.length) {
    var node = stack.pop();
    var left = node.left;
    node.left = node.right;
    node.right = left;

    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return root;
};