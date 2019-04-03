// Singly Linked List
class Node {
  // initializes a Node with a value and a pointer to the next element
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // initializes a SinglyLinkedList with a head, tail and length
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* adds a node to the end of the list with the provided value
   * params:
   * - val: the value of the new node
   * Complexity: O(1)
   */

  push(val) {
    // create a new node
    const newNode = new Node(val);
    // if the list is empty set the head and tail to the node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set the next value of the tail to the new node
      this.tail.next = newNode;
      // set the tail to the new node
      this.tail = newNode;
    }
    // increase the length
    this.length += 1;
    return this;
  }

  /* removes the node at the end of the list
   * Complexity: O(n)
   */
  pop() {
    // if the list is empty there is nothing at the end
    if (!this.head) return undefined;
    // start at the head of the list
    let currentNode = this.head;
    let newTail = currentNode;
    // iterate over the list until the currentNode is the last node
    while (currentNode.next) {
      // set the newTail to the previous node
      newTail = currentNode;
      // set the currentNode to the next node
      currentNode = currentNode.next;
    }
    // set the tail to the new tail
    this.tail = newTail;
    // set the next value of the new tail to null
    this.tail.next = null;
    // decrease the length
    this.length -= 1;
    // if the only node in the list was removed update the head and tail to be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the last element in the list
    return currentNode;
  }

  /* remove the node at the beginning of the list
   * Complexity: O(1)
   */
  shift() {
    // if the list is empty there isn't a first node
    if (this.length === 0) return undefined;
    // get the first node in the list
    const currentNode = this.head;
    // update the head to be the next node in the list
    this.head = currentNode.next;
    // decrease the length of the list
    this.length -= 1;
    // if the list is now empty update the tail
    if (this.length === 0) this.tail = null;
    return currentNode;
  }

  /* add a node to the beginning of the list
   * Complexity: O(1)
   */
  unshift(val) {
    // create a node for the new value
    const newHead = new Node(val);
    // if the list is empty set the head and tail to the new node
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      // otherwise set the next value of the newHead to the current head
      newHead.next = this.head;
      // update the head to the newHead
      this.head = newHead;
    }
    // increase the length of the list
    this.length += 1;
    return this;
  }

  /* get the node at the given index
   * Complexity: O(n)
   */
  get(index) {
    // if the index is not in the length range it's not in the list
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    // iterate over the list until at the index
    for (let position = 0; position < index; position++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /* set the node value at a given index
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
    // if the index is not in the length range it's not in the list
    if (index < 0 || index > this.length) return false;
    // if the index is at the beginning of the list unshift the value to the front
    if (index === 0) return !!this.unshift(val);
    // if the index is at the end of the list push the value to the end
    if (index === this.length) return !!this.push(val);

    // create a newNode for the value
    const newNode = new Node(val);
    // find the node before the node at the given index
    const prevNode = this.get(index - 1);
    // update the newNode's next to be the prevNode's next node
    newNode.next = prevNode.next;
    // update the prevNode's next to be the newNode
    prevNode.next = newNode;
    // increase the length of the list
    this.length += 1;
    return true;
  }

  /* remove a node at the given index
   * Complexity: O(n)
   */
  remove(index) {
    // if the index is not in the length range it's not in the list
    if (index < 0 || index > this.length) return undefined;
    // if the index is at the beginning of the list shift the value from the front
    if (index === 0) return this.shift();
    // if the index is at the end of the list pop the value from the end
    if (index === this.length - 1) return this.pop();

    // find the node before the node at the given index
    const prevNode = this.get(index - 1);
    // get the node to be removed from the prevNode's next
    const removedNode = prevNode.next;
    // update the prevNode's next to be the removedNode's next
    prevNode.next = removedNode.next;
    // decrease the length of the list
    this.length -= 1;
    return removedNode;
  }

  /* reverse the values of the list in place
   * Complexity: O(n)
   */
  reverse() {
    // start at the head of the list
    let node = this.head;
    // swap the nodes at the head and tail of the list
    [this.head, this.tail] = [this.tail, this.head];
    // initialize the next and prev nodes
    let next,
      prev = null;
    // iterate over the entire list until the end
    for (let i = 0; i < this.length; i++) {
      // set the next node to the next of the current node
      next = node.next;
      // set the current node's next node to be the prev node
      node.next = prev;
      // update the prev node to be the current node
      prev = node;
      // set the current node to the next node in the list
      node = next;
    }
    return this;
  }

  /* prints the list
   * Complexity: O(n)
   */
  print() {
    // initialize an array to print
    const arr = [];
    // start at the head
    let currentNode = this.head;
    // iterate over the list until the end
    while (currentNode) {
      // push the value to the array
      arr.push(currentNode.val);
      // update the currentNode to the next node
      currentNode = currentNode.next;
    }
    // log the array
    console.log(arr);
  }
}
