/* Priority Queue
 * Rules:
 * - Each parent has, at most, two child nodes.
 * - The priority of the parent is always higher(smaller) than the subsequent children.
 * - All children of parent nodes are filled from the left most first and then the right.
 */
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  parentIndex = index => Math.floor((index - 1) / 2);

  leftChildIndex = index => index * 2 + 1;

  rightChildIndex = index => index * 2 + 2;

  /* Move the value at the given index up to the correct index in the queue.
   *
   */
  bubbleUp = index => {
    // find the parentIndex of the given index
    let parentIndex = this.parentIndex(index);
    // if the index is less than or equal to the first index of the queue or the value of
    // the current index priority is greater than the priority at the parentIndex it's done.
    if (index <= 0 || this.queue[index].priority >= this.queue[parentIndex].priority)
      return this.queue;
    // swap the nodes at the current and parentIndex
    [this.queue[index], this.queue[parentIndex]] = [this.queue[parentIndex], this.queue[index]];
    // bubble up from the parentIndex
    return this.bubbleUp(parentIndex);
  };

  /* Move the node at the given index down to the correct index in the queue.
   *
   */
  sinkDown = index => {
    const leftIndex = this.leftChildIndex(index),
      rightIndex = this.rightChildIndex(index),
      leftChild = this.queue[leftIndex],
      rightChild = this.queue[rightIndex],
      length = this.queue.length;
    let highest = index;
    // if the leftIndex is in range and the leftChild exists and its priority is less than
    // the parent set the index of the smallest value to the leftIndex
    if (leftIndex <= length && leftChild && leftChild.priority < this.queue[highest].priority) {
      highest = leftIndex;
    }
    // if the rightIndex is in range and the rightChild exists and its priority is less than
    // the parent set the index of the smallest value to the rightIndex
    if (rightIndex <= length && rightChild && rightChild.priority < this.queue[highest].priority) {
      highest = rightIndex;
    }

    // if the highest priority index changed swap the values and sinkDown the
    // new highest
    if (highest !== index) {
      [this.queue[highest], this.queue[index]] = [this.queue[index], this.queue[highest]];
      this.sinkDown(highest);
    }
  };

  /* Inserts a node into the PriorityQueue and 'bubbles' up the value to
   * the correct index.
   *
   */
  enqueue = (val, priority) => {
    this.queue.push(new Node(val, priority));
    return this.bubbleUp(this.queue.length - 1);
  };

  /* Extracts the highest priority node from the PriorityQueue and swaps the last node
   * of the heap to the beginning and 'bubble' it down to the correct position.
   *
   */
  dequeue = () => {
    const next = this.queue[0],
      last = this.queue.pop();
    if (this.queue.length > 0) {
      this.queue[0] = last;
      this.sinkDown(0);
    }
    return next;
  };
}
