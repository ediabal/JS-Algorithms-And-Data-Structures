/* Selection Sort: O(n^2)
 *
 * The selection sort algorithm works by iterating over the array searching
 * for the smallest value in each iteration and placing it towards the front
 * of the array.
 * 
 * The only real benefit to using this sorting algorithm is if the writing
 * of a value to the array is very intensive. This is because the values are
 * only swapped if necessary.
 *
 * The complexity of the selection sort algorithm is O(n^2) because the
 * array always has to be iterated over for each element in the array.
 */
const selectionSort = (arr) => {
  // iterate over the length of the array
  for (let i = 0; i < arr.length; i++) {
    // set the current smallest value to the current index
    let smallest = i;
    // iterate over the array starting from the next index
    for (let j = i + 1; j < arr.length; j++) {
      // if the new index value is less than the smallest index value
      // set smallest to that index
      if (arr[j] < arr[smallest]) smallest = j;
    }
    // swap the values if the smallest index is not equal to the current index
    if (smallest !== i) [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }
  return arr;
};