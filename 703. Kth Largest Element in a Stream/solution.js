/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.count = Math.min(k, nums.length);
  this.k = k;
  if (nums.length === 0) {
    this.tree = null;
    return;
  }
  const initialElems = nums.slice(0, k);
  this.tree = buildTree(initialElems);

  if (nums.length > k) {
    for (let i = k; i < nums.length; i++) this.add(nums[i]);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (!this.tree) {
    this.tree = new TreeNode(val);
    this.count++;
    return val;
  } else {
    const minNode = findMinNode(this.tree);
    let minVal = minNode.val;
    // already have k elements in the tree, delete one node before adding a new node
    if (val > minNode.val && this.count === this.k) {
      this.tree = deleteNode(this.tree, minNode.val);
      this.tree = insertIntoBST(this.tree, val);
      minVal = findMinNode(this.tree).val;
      // continue to fill the tree if there are less than k elements
    } else if (this.count < this.k) {
      this.tree = insertIntoBST(this.tree, val);
      this.count++;
      minVal = findMinNode(this.tree).val;
    }
    return minVal;
  }
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */

var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
};

function findMinNode(node) {
  while (node && node.left) node = node.left;
  return node;
}

const buildTree = arr => {
  let root = new TreeNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== null) insertIntoBST(root, arr[i]);
  }
  return root;
};

var deleteNode = function(root, key) {
  if (!root) return root;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    // delete root
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    const minNode = findMinNode(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, root.val);
  }
  return root;
};