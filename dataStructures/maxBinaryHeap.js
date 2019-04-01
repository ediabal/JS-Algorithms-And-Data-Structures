/* Binary Heap
 * Rules:
 * - Each parent has, at most, two child nodes.
 * - The value of the parent is always greater than the subsequent children.
 * - All children of parent nodes are filled from the left most first and then the right.
*/
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  parentIndex(index) { return Math.floor((index - 1) / 2); }

  leftChildIndex(index) { return Math.floor((index * 2) + 1); }

  rightChildIndex(index) { return Math.floor((index * 2) + 2); }

  bubbleUp(index = this.values.length - 1) {
    let parentIndex = this.parentIndex(index);

    while(index > 0 && this.values[index] > this.values[parentIndex]) {
      [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
      index = parentIndex;
      parentIndex = this.parentIndex(index);
    }
    
    return this;
  }

  bubbleDown(index = 0) {
    let leftChildIndex = this.leftChildIndex(index),
    rightChildIndex = this.rightChildIndex(index);

    let value = this.values[index],
    leftChild = this.values[leftChildIndex],
    rightChild = this.values[rightChildIndex];

    while (
      (leftChildIndex < this.values.length && rightChildIndex < this.values.length) &&
      (leftChild > value || rightChild > value)
    ) {
      if (leftChild > rightChild) {
        this.values[leftChildIndex] = value;
        this.values[index] = leftChild;
        index = leftChildIndex;
      } else {
        this.values[rightChildIndex] = value;
        this.values[index] = rightChild;
        index = rightChildIndex;
      }

      leftChildIndex = this.leftChildIndex(index);
      rightChildIndex = this.rightChildIndex(index);

      value = this.values[index];
      leftChild = this.values[leftChildIndex];
      rightChild = this.values[rightChildIndex]; 
    }
  }

  insert(val) {
    this.values.push(val);
    return this.bubbleUp();
  }

  extractMax() {
    const max = this.values[0]
    const last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }
    return max;
  }
}