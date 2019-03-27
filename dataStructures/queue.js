// Queue
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // works like push by adding a node to the end of the queue
  enqueue(val) {
    const newNode = new Node(val);
    // if the queue is empty set the first and last to the newNode
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // set the next of the previous last node to the newNode
      this.last.next = newNode;
      // set the last node to the newNode
      this.last = newNode;
    }
    // increase the length
    return ++this.length;
  }

  // works like shift by removing the node at the front of the queue
  dequeue() {
    // if there is nothing in the queue there's nothing to return
    if (!this.first) return null;
    // retrieve the first node
    const firstNode = this.first;
    // if there's only one node in the list set the first and last to null
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      // set the new first to be the previous firstNode
      this.first = firstNode.next;
      // clear the firstNode's next value
      firstNode.next = null;
    }
    // decrease the length
    this.length--;
    return firstNode.val;
  }
}