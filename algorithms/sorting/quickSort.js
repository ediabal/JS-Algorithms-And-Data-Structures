/* Quick Sort: O(n log(n))
 *
 * The quick sort algorithm works by pivoting the array by sending the array,
 * the start value of the array and end value of the array. Inside the pivot
 * a point is decided and all values less than that point are pushed to the left
 * and those greater to the right. Every time a value is pushed to the left a
 * value representing the pivot point's index is increased by one. After that
 * the value at the start value or beginning of the array is swapped with the
 * value at the pivot point index and the pivot point index is returned.
 * This pivoting continues to happen for all values left and right of the pivot
 * value until the right side index is less than the left.
 *
 * The complexity of this algorithm is O(n log(n)) however in the worst case it
 * can be O(n^2). This happens when the array is already sorted and the min or max
 * value is selected as the pivot.
 */
const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);

const pivot = (arr, start = 0, end = arr.length - 1) => {
  // find the value of the pivot
  const pivot = arr[start];
  // initialize the pivot swap index
  let swapIndex = start;
  // iterate over the sub array until you reach the end index
  for (let i = 0; i <= end; i++) {
    if (pivot > arr[i]) {
      // if the pivot is larger than the current value increase the
      // swap index and swap the current value with the new swapIndex.
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  // after iterating over the entire sub array, swap the pivot value at
  // the start with the value at the pivot index. This places all the
  // values less than it on the left and places the pivot value at the
  // final correct index.
  swap(arr, start, swapIndex);
  // return the swapIndex to represent the index for the next quick sort
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // while the left index is less than the right index, keep pivoting
  // until all values are in the correct indices
  if (left < right) {
    // find the pivot index and place the current pivot at the correct
    // index location.
    const pivotIndex = pivot(arr, left, right);
    // pivot for the left section of the array
    quickSort(arr, left, pivotIndex - 1);
    // pivot for the right section of the array
    quickSort(arr, pivotIndex + 1, right);
  }
  // all values are in the correct index
  return arr;
};
