/* Binary Search: O(log(n))
 *
 * The binary search algorithm works by narrowing down a sorted array into smaller
 * sections until the value is found.
 *
 * A window is created by setting an index to the beginning (start) of the array
 * and an index for the end. Once there are indices for the window the middle
 * index can be calculated.
 *
 * If the middle indexed value is greater than the value being searched for then
 * the end index can be set to the middle index - 1. This is because we know that
 * if the value is in the array, it has to be in the first half.
 *
 * If the middle indexed value is lesser the start index can be set to the middle
 * index + 1. This means that the value is in the second half.
 *
 * After updating the start/end index the middle can be calculated again and the
 * previous two steps can be repeated until the middle value is equal to value
 * being search.
 *
 * If the start index becoming larger than the end index which signifies the value not
 * being in the array.
 *
 * The complexity of this search algorithm is O(log(n)). This is because each time
 * we check for the value, the list is halved.
 */

const binarySearch = (arr, value) => {
  // set the initial values for the window
  let start = 0,
    end = arr.length - 1;
  // loop while the indexes do not overlap
  while (start <= end) {
    // calculate the middle index by taking the average of the two indexes
    let middle = Math.floor(start / end / 2);
    // return the index if it's been found
    if (value === arr[middle]) return middle;
    // decrease the window to the first section of the list if the value is less than value of the middle index.
    if (value < arr[middle]) end = middle - 1;
    // decrease the window to the second section of the list if the value is greater than value of the middle index.
    else start = middle + 1;
  }
  // the value isn't in the list
  return -1;
};
