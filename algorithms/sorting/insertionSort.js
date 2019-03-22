/* Insertion Sort: O(n^2)
 *
 * The insertion sort works by keeping a sorted section of the array
 * at the beginning and inserting elements one by one into that sorted portion.
 * 
 * This algorithm is vey handy for dealing with values being input continuously.
 * 
 * The complexity of this algorithm is O(n^2) due to looping over the array
 * and iterating for each value in that array.
*/
const insertionSort = (arr) => {
  // iterate over the array starting from the second index
  for (let i = 1; i < arr.length; i++) {
    // initialize the current value and the internal index so
    // it can be accessed outside the loop
    let currentValue = arr[i], j;
    // iterate over the array starting at the end until the sorted
    // portion of the array is hit (the beginning or where the
    // currentValue is less than the j index)
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      // move the current value up
      arr[j+1] = arr[j];
    }
    // set the currentValue to the next index of the sorted portion
    arr[j+1] = currentValue;
  }
  return arr;
};