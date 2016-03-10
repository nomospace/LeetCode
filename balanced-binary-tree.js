/*
 Given a binary tree, determine if it is height-balanced.
 For this problem, a height-balanced binary tree is defined as a binary tree
 in which the depth of the two subtrees of every node never differ by more than 1.

 https://leetcode.com/problems/balanced-binary-tree/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/*
 the top down approach

 For the current node root, calling depth() for its left and right children actually has to access all of its children, thus the complexity is O(N).
 We do this for each node in the tree, so the overall complexity of isBalanced will be O(N^2).
 This is a top down approach.
 */
var isBalanced = function(root) {
  if (!root) return true;

  var depth = function(root) {
    if (!root) return 0;
    return Math.max(depth(root.left), depth(root.right)) + 1;
  };

  var left = depth(root.left);
  var right = depth(root.right);

  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

/*
 the bottom up way

 The second method is based on DFS.
 Instead of calling depth() explicitly for each child node,
 we return the height of the current node in DFS recursion.
 When the sub tree of the current node (inclusive) is balanced, the function dfsHeight() returns a non-negative value as the height.
 Otherwise -1 is returned.
 According to the leftHeight and rightHeight of the two children,
 the parent node could check if the sub tree is balanced, and decides its return value.
 */
var isBalanced2 = function(root) {

  var dfsHeight = function(root) {
    if (!root) return 0;

    var leftHeight = dfsHeight(root.left);
    if (leftHeight === -1) return -1;
    var rightHeight = dfsHeight(root.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
  };

  return dfsHeight(root) !== -1;
};