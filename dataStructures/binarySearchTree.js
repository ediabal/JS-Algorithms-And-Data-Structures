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
}