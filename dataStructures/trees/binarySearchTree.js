// Binary Search Tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /* adds a node to the tree
   * Complexity: O(log n) (if balanced)
   */
  insert = (val, node = this.root) => {
    // if the root is empty the tree is empty
    if (!this.root) {
      // set the root
      this.root = new Node(val);
    } else {
      // if the val is greater than the node val try to move it to the right
      if (val > node.val) {
        if (node.right) {
          // if there is a right node, try to insert it under that node
          this.insert(val, node.right);
        } else {
          // set the right node to the val
          node.right = new Node(val);
        }
      } else {
        // if the val is greater than the node val try to move it to the left
        if (node.left) {
          // if there is a left node, try to insert it under that node
          this.insert(val, node.left);
        } else {
          // set the left node to the val
          node.left = new Node(val);
        }
      }
    }
    return this;
  };

  /* finds a node in the tree
   * Complexity: O(log n) (if balanced)
   */
  find = (val, node = this.root) => {
    // if the root is empty the value isn't in the tree
    if (!this.root) return undefined;
    // if the val is equal to the val at the current node, that's it
    if (val === node.val) return node;
    // if the val is greater than the node val search down the right
    // side of the node
    if (val > node.val) {
      if (node.right) {
        // if there is a right node, search down that node
        return this.find(val, node.right);
      } else {
        // it isn't in the tree
        return null;
      }
    } else {
      // if the val is less than the node val search down the left
      // side of the node
      if (node.left) {
        // if there is a left node, search down that node
        return this.find(val, node.left);
      } else {
        // it isn't in the tree
        return null;
      }
    }
  };

  /* visits every sibling node before moving on to the children nodes
   *
   */
  breadthFirst = (node = this.root) => {
    // create a queue to push the nodes being looked at into
    const queue = [],
      // create a visited list to show the nodes traversed
      visited = [];
    // push the 'root' node into the queue to start at
    if (node) queue.push(node);
    // while there is something in the queue continue visiting the child nodes
    while (queue.length > 0) {
      // remove the current node being looked at from the front of the queue
      node = queue.shift();
      // add that node's value to the visited list
      visited.push(node.val);
      // if the current node has a right or left child, add them to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  };

  /* traverses the entire tree by going down the left most node completely before
   * moving on to the right.
   *
   * Side Note: Good for preserving a list form of the tree.
   */
  depthFirstPreOrder = (root = this.root) => {
    // create a list to hold the values of nodes visited
    const visited = [];
    // helper method to traverse the tree
    const visit = node => {
      // push the value of the current node to the list of visited nodes
      visited.push(node.val);
      // traverse the left and right child nodes
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
    };
    // if there is a root start form there
    if (root) visit(root);
    return visited;
  };

  /* traverses the entire tree by going down the left most node completely before
   * moving on to the right and then adds the nodes after the traversal.
   *
   */
  depthFirstPostOrder = (root = this.root) => {
    // create a list to hold the values of nodes visited
    const visited = [];
    // helper method to traverse the tree
    const visit = node => {
      // traverse the left and right child nodes
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
      // push the value of the current node to the list of visited nodes
      visited.push(node.val);
    };
    // if there is a root start form there
    if (root) visit(root);
    return visited;
  };

  /* traverses the entire tree by going down the left most node completely then
   * adds the nodes before moving on to the right.
   *
   * Side Note: Good to create a sorted list of the tree
   */
  depthFirstInOrder(root = this.root) {
    // create a list to hold the values of nodes visited
    const visited = [];
    // helper method to traverse the tree
    const visit = node => {
      // traverse the left child nodes
      if (node.left) visit(node.left);
      // push the value of the current node to the list of visited nodes
      visited.push(node);
      // traverse the right child nodes
      if (node.right) visit(node.right);
    };
    // if there is a root start form there
    if (root) visit(root);
    return visited;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}