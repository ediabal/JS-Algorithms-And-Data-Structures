/* Min Binary Heap
 * Rules:
 * - Each parent has, at most, two child nodes.
 * - The value of the parent is always smaller than the subsequent children.
 * - All children of parent nodes are filled from the left most first and then the right.
*/
class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  parentIndex = index => Math.floor((index - 1) / 2);

  leftChildIndex = index => Math.floor(index / 2) + 1;

  rightChildIndex = index => Math.floor(index / 2) + 2;

  /* Move the value at the given index up to the correct index in the heap.
   *
  */
  bubbleUp = (index = this.values.length - 1) => {
    // find the parentIndex of the given index
    let parentIndex = this.parentIndex(index);
    // while the index is greater than the first index of the values and the value of
    // the current index is less than the value at the parentIndex.
    while (index > 0 && this.values[index] < this.values[parentIndex]) {
      // swap the values at the current and parentIndex
      [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
      // move the index up to the parentIndex
      index = parentIndex;
      // find the new parentIndex of the new index
      parentIndex = this.parentIndex(index);
    }
    return this;
  };

  /* Move the value at the given index down to the correct index in the heap.
   *
  */
  bubbleDown = (index = 0) => {
    // find the child indices of the given index
    let leftChildIndex = this.leftChildIndex(index),
    rightChildIndex = this.rightChildIndex(index);
    // store the values of the indices for easy access
    let value = this.values[index],
    leftChild = this.values[leftChildIndex],
    rightChild = this.values[rightChildIndex];
    // while the child indices are less than the length of the heap and the child values
    // are less than the value at the current index
    while (
      (leftChildIndex < this.values.length && rightChildIndex < this.values.length) &&
      (leftChild < value || rightChild < value)
    ) {
      // determine whether to swap with the left or right child
      if (leftChild < rightChild) {
        // swap the values of the current index value and the leftChild
        this.values[index] = leftChild;
        this.values[leftChildIndex] = value;
        // update the current index to the leftChildIndex
        index = leftChildIndex;
      } else {
        // swap the values of the current index value and the rightChild
        this.values[index] = rightChild;
        this.values[rightChildIndex] = value;
        // update the current index to the rightChildIndex
        index = rightChildIndex;
      }
      // update child indices
      leftChildIndex = this.leftChildIndex(index);
      rightChildIndex = this.rightChildIndex(index);
      // update values
      value = this.values[index],
      leftChild = this.values[leftChildIndex],
      rightChild = this.values[rightChildIndex];
    }
  };

  /* Inserts a val into the minBinaryHeap and 'bubbles' up the value to
   * the correct index.
   *
  */
  insert = value => {
    this.values.push(value);
    return this.bubbleUp(this.values.length - 1);
  };

  /* Extracts the minimum value from the minBinaryHeap and swaps the last value
   * of the heap to the beginning and 'bubble' it down to the correct position.
   *
  */
  extractMin = () => {
    const min = this.values[0];
    const last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown(0);
    }
    return min;
  };
}