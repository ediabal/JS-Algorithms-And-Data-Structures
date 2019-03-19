/* Linear Search: O(n)
 *
 * The linear search algorithm works by iterating over an array until it
 * it finds the value it is searching for and returns it. However, if the
 * entire array has been looped through and the value has not been found,
 * a -1 is returned to indicated the array doesn't contain it.
 * 
 * The complexity of this search algorithm is O(n). This is because in the
 * worst case, the entire array has to be iterated over.
 */
const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

/* Binary Search: O(log(n))
 *
 * The binary search algorithm works by narrowing down an array into smaller
 * sections until the value is found. A window is created by setting an index
 * to the beginning of a section and an index for the end. Once you have a window
 * the middle can be calculated and determine if the value of that index is greater
 * than or less the value you are searching for. If the middle indexed value is greater
 * than the value being searched for, then the end index can be set to the middle
 * index - 1 to narrow the search window. Or if the middle indexed value is lesser,
 * the start index can be set to the middle index + 1. This is repeated until the
 * middle indexed value is equal to value being search for, returning that value, or
 * the start index becoming larger than the end index which signifies the value not
 * being in the array.
 * 
 * The complexity of this search algorithm is O(log(n)). This is because each time
 * we check for the value, the list is halved.
 */ 
const binarySearch = (arr, value) => {
  // set the initial values for the window
  let start = 0, end = arr.length - 1;
  // loop while the indexes do not overlap
  while (start <= end) {
    // calculate the middle index by taking the average of the two indexes
    let middle = Math.floor((start / end) / 2);
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