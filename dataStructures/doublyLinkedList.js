// DoublyLinkedList
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* add a node to the end of the list
   * Complexity: O(1)
   */
  push(val) {
    // create a newNode for the value
    const newNode = new Node(val);
    // if the list is empty set the head and tail to the newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set the tail's next to be the newNode
      this.tail.next = newNode;
      // set the newNode's prev be the tail
      newNode.prev = this.tail;
      // update the tail to be the newNode
      this.tail = newNode;
    }
    // increase the length of the list
    this.length++;
    return this;
  }

  /* remove the last node from the list
   * Complexity: O(1)
   */
  pop() {
    // if the list is empty there's no node to pop
    if (!this.head) return undefined;
    // create a temp value for the oldTail
    const oldTail = this.tail;
    // if the list only has 1 element update the head and tail
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // set the tail to the previous node of the oldTail
      this.tail = oldTail.prev;
      // set the tails next node to be null
      this.tail.next = null;
      // sever the oldTail's connection
      oldTail.prev = null;
    }
    // decrease the length
    this.length--;
    return oldTail;
  }

  /* remove the node from the front of the list
   * Complexity: O(1)
   */
  shift() {
    // if the list is empty there's nothing to return
    if (!this.head) return undefined;
    // set a temp for the oldHead
    const oldHead = this.head;
    // if the list only has one element update the head and tail
    if (this.length === 1) {
      this.head = null;
      this.tails = null;
    } else {
      // update to the new head
      this.head = oldHead.next;
      // clear the oldHead's next
      oldHead.next = null;
      // clear the new head's prev
      this.head.prev = null;
    }
    // decrease the length
    this.length--;
    return oldHead;
  }

  /* add a node to the front of the list
   * Complexity: O(1)
   */
  unshift(val) {
    const newNode = new Node(val);
    // if the list is empty update the head and tail to the newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set the old head's prev to the newNode
      this.head.prev = newNode;
      // set the newNode's next to the old head
      newNode.next = this.head;
      // update the head to the newNode
      this.head = newNode;
    }
    // increase the length
    this.length++;
    return this;
  }

  /* retrieve the value at a given index
   * Complexity: O(n)
   */
  get(index) {
    // index isn't in the list
    if (index < 0 || index >= this.length) return undefined;
    // determine whether to iterate starting from the head or tail
    const startAtHead = Math.floor(this.length / 2) > index;
    let node;
    // start iterating from the head
    if (startAtHead) {
      node = this.head;
      // get the next node until the index is reached
      for (let i = 0; i < index; i++) node = node.next;
    } else {
      // start iterating for the tail
      node = this.tail;
      // get the prev node until the index is reached
      for (let i = this.length - 1; i > index; i--) node = node.prev;
    }
    return node;
  }

  /* set the value of a node at a given index
   * Complexity: O(n)
   */
  set(index, val) {
    // get the node to be updated
    const node = this.get(index);
    // update the node if found
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  /* insert a node at the given index
   * Complexity: O(n)
   */
  insert(index, val) {
    // if the index is not in the list
    if (index < 0 || index > this.length) return false;
    // if the index is at the beginning add it to the front
    if (index === 0) return !!this.unshift(val);
    // if the index is at the end add it to the end
    if (index === this.length) return !!this.push(val);

    // create the newNode
    const newNode = new Node(val);
    // find the node before the given index
    const prevNode = this.get(index - 1);
    // set the next index on the newNode to the next node on the prevNode
    newNode.next = prevNode.next;
    // set the prev node on the newNode to the prevNode
    newNode.prev = prevNode;
    // set the next node on the prevNode to the newNode
    prevNode.next = newNode;
    // increase the length
    this.length++;
    return true;
  }

  /* remove a node at the given index
   * Complexity: O(n)
   */
  remove(index) {
    // if the index is not in the list
    if (index < 0 || index >= this.length) return undefined;
    // if the index is at the beginning remove the first node
    if (index === 0) return this.shift();
    // if the index is at the end remove the last node
    if (index === this.length - 1) return this.pop();

    // find the node to be removed
    const node = this.get(index);
    // update the previous node's next node
    node.prev.next = node.next;
    // update the next node's previous node
    node.next.prev = node.prev;
    // update the node to be removed's prev and next nodes
    node.prev = null;
    node.next = null;
    // decrease the length
    this.length--;
    return node;
  }
}
