// Binary Search Tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /* adds a node to the tree
   * Complexity: O(log n) (if balanced)
  */
  insert(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      if (val > node.val) {
        if (node.right) {
          this.insert(val, node.right)
        } else {
          node.right = new Node(val);
        }
      } else {
        if (node.left) {
          this.insert(val, node.left);
        } else {
          node.left = new Node(val);
        }
      }
    }
    return this;
  }

  /* finds a node in the tree
   * Complexity: O(log n) (if balanced)
  */
  find(val, node = this.root) {
    if (!this.root) return undefined;
    if (val === node.val) return node;
    if (val > node.val) {
      if (node.right) {
        return this.find(val, node.right);
      } else {
        return null;
      }
    } else {
      if (node.left) {
        return this.find(val, node.left);
      } else {
        return null;
      }
    }
  }

  /* visits every sibling node before moving on to the children nodes
   * 
  */
  breadthFirst(node = this.root) {
    const queue = [], visited = [];
    if (node) queue.push(node);
    while (queue.length > 0) {
      node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  /* traverses the entire tree by going down the left most node completely before
   * moving on to the right.
   *
  */
  depthFirstPreOrder(root = this.root) {
    const visited = [];
    const visit = (node) => {
      visited.push(node.val);
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
    };
    if (root) visit(root);
    return visited;
  }

  /* traverses the entire tree by going down the left most node completely before
   * moving on to the right and then adds the nodes after the traversal.
   *
  */
  depthFirstPostOrder(root = this.root) {
    const visited = [];
    const visit = (node) => {
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
      visited.push(node.val);
    };
    if (root) visit(root);
    return visited;
  }

  /* traverses the entire tree by going down the left most node completely then
   * adds the nodes before moving on to the right.
   *
  */
  depthFirstInOrder(root = this.root) {
    const visited = [];
    const visit = (node) => {
      if (node.left) visit(node.left);
      visited.push(node);
      if (node.right) visit(node.right);
    }
    if (root) visit(root);
    return visited;
  }
}