/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (1 > n) return [];
  const treeMemos = {};

  const generateRangeTrees = (o, m) => {
    if (o === m) return [new TreeNode(o)];
    else if (m < o) return [null];

    const key = `${o},${m}`;

    if (treeMemos[key]) return treeMemos[key];
    const trees = [];

    for(let i = o; i <= m; i++) {
      const lowRangeTrees = generateRangeTrees(o, i - 1);
      const highRangeTrees = generateRangeTrees(i + 1, m);

      lowRangeTrees.forEach(lowTree => {
        highRangeTrees.forEach(highTree => {
          const newTree = new TreeNode(i);
          newTree.left = lowTree;
          newTree.right = highTree;
          trees.push(newTree);
        });
      });
    }

    treeMemos[key] = trees;
    return trees;
  }

  return generateRangeTrees(1, n);
};