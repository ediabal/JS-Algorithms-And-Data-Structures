// Stack
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /* actually works like unshift by adding a node to the start of the stack
   * Complexity: O(1)
   */
  push(val) {
    const newNode = new Node(val);
    // if the list is empty set the first and last to the newNode
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // set the next of the newNode to the first node
      newNode.next = this.first;
      // set the first node to the newNode
      this.first = newNode;
    }
    // increase the length
    return ++this.length;
  }

  /* actually works like shift by removing a node from the start of the stack
   * Complexity: O(1)
   */
  pop() {
    // if the list is empty there's nothing to return
    if (!this.first) return null;
    // get the first node
    const firstNode = this.first;
    // if there is only one node in the list set the first and last to null
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      // set the new first node to the next of the previous first node
      this.first = firstNode.next;
      // clear the next on the first node
      firstNode.next = null;
    }
    // decrease the length
    this.length--;
    return firstNode.val;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
