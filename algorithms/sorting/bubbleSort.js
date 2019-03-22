/* Bubble Sort: O(n^2)
 * 
 * The bubble sort algorithm works by 'bubbling' the largest elements to the
 * end. This is accomplished by looping over the array starting from the last
 * index and inside that loop iterating over the list starting from the beginning
 * working towards the end. The internal loop will find the largest element and swap
 * it until it's at the end of the array and the external loop will omit that position
 * on the next internal iteration. This means each internal iteration gets smaller as
 * the end of the array becomes sorted. This is repeated until all the largest elements
 * are sorted.
 *
 * The complexity of this sorting algorithm is O(n^2) because in the worst
 * case the array have to be looped over for every element in the array.
 * 
 * However, in the best case, if the array is partially sorted and no swap
 * occurs, the loop can end early and be O(n).
 */
const bubbleSort = (arr) => {
  // iterate over the array starting from the last index
  for (let i = arr.length - 1; i > 0; i--) {
    // reinitialize that there will be no swap
    let noSwap = true;
    // iterate over the array until the outer limit is reached
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        // if the current value is greater than the next one, swap them
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        noSwap = false;
      }
    }
    // if no swap occurred, the array is sorted and the loop can end early
    if (noSwap) break;
  }
  return arr;
};