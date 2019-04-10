/* Max Binary Heap
 * Rules:
 * - Each parent has, at most, two child nodes.
 * - The value of the parent is always greater than the subsequent children.
 * - All children of parent nodes are filled from the left most first and then the right.
 */
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  parentIndex = index => Math.floor((index - 1) / 2);

  leftChildIndex = index => index * 2 + 1;

  rightChildIndex = index => index * 2 + 2;

  /* Move the value at the given index up to the correct index in the heap. */
  bubbleUp = index => {
    // find the parentIndex of the given index
    let parentIndex = this.parentIndex(index);
    // if the index is less than or equal to the first index of the values or the value of
    // the current index is less than the value at the parentIndex it's done.
    if (index <= 0 || this.values[index] <= this.values[parentIndex]) return this.values;
    // swap the values at the current and parentIndex
    [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
    // bubble up from the parentIndex
    return this.bubbleUp(parentIndex);
  };

  /* Move the value at the given index down to the correct index in the heap. */
  sinkDown = index => {
    const leftIndex = this.leftChildIndex(index),
      rightIndex = this.rightChildIndex(index),
      leftValue = this.values[leftIndex],
      rightValue = this.values[rightIndex],
      length = this.values.length;
    let largest = index;
    // if the leftIndex is in range and the leftValue is greater than
    // the parent set the index of the largest value to the leftIndex
    if (leftIndex <= length && leftValue > this.values[largest]) {
      largest = leftIndex;
    }
    // if the rightIndex is in range and the rightValue is greater than
    // the parent set the index of the largest value to the rightIndex
    if (rightIndex <= length && rightValue > this.values[largest]) {
      largest = rightIndex;
    }
    // if the largest index changed swap the values and sinkDown the
    // new largest value
    if (largest !== index) {
      [this.values[largest], this.values[index]] = [this.values[index], this.values[largest]];
      this.sinkDown(largest);
    }
  };

  /* Inserts a val into the minBinaryHeap and 'bubbles' up the value to
   * the correct index.
   * Complexity: O(log(n))
   */
  insert = value => {
    this.values.push(value);
    return this.bubbleUp(this.values.length - 1);
  };

  /* Extracts the max value from the minBinaryHeap and swaps the last value
   * of the heap to the beginning and 'bubble' it down to the correct position.
   * Complexity: O(log(n))
   */
  extractMax = () => {
    const max = this.values[0],
      last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown(0);
    }
    return max;
  };
}
