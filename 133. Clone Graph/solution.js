/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  if (!graph) return graph;
  const nodes = {};

  const traverseGraph = (node) => {
    if (!node) return;
    if (!nodes.hasOwnProperty(node.label)) {
      const newNode = new UndirectedGraphNode(node.label);
      nodes[node.label] = newNode;
      for (let i = 0, len = node.neighbors.length; i < len; i++) 
        newNode.neighbors.push(traverseGraph(node.neighbors[i]));
    }
    return nodes[node.label];
  };

  return traverseGraph(graph);
};