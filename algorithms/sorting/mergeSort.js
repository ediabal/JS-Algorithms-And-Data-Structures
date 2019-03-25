/* Merge Sort: O(n log(n))
 *
 * The merge sort works by breaking down the given array into smaller arrays until
 * each array ends at a size of 1. Once that size is met the arrays are then merged
 * together by iterating over the elements in each of the two arrays and comparing
 * values to keep them sorted.
 * 
 * The complexity of this algorithm is O(n log(n)) because we are basically iterating
 * over the length of the entire array once when the merges occur and only iterating over
 * a square of the initial array when breaking down the array into smaller chunks.
*/
const merge = (arr1, arr2) => {
  const result = [];
  let x = 0, y = 0;
  // iterate over the arrays while one of the indices is less than the length of
  // it's array
  while (x < arr1.length && y < arr2.length) {
    // if the value of the first array is less than the other, push that result
    // and increment the index of the first array
    if (arr1[x] < arr2[y]) {
      result.push(arr1[x]);
      x++;
    } else {
      // otherwise push the value of the other array into the result and
      // increment the index of the second array
      result.push(arr2[y]);
      y++;
    }
  }

  // if we've finished the previous loop and there are values still left over in
  // the first array push them into the result
  while (x < arr1.length) {
    result.push(arr1[x]);
    x++;
  }

  // if we've finished the previous loop and there are values still left over in
  // the second array push them into the result
  while (y < arr2.length) {
    result.push(arr2[y]);
    y++;
  }

  return result;
};

const mergeSort = (arr) => {
  // if we've broken down the array into one element, break the loop
  if (arr.length <= 1) return arr;
  // determine the middle index of the array to split it
  const mid = Math.floor(arr.length / 2);
  // recursively break down the left side of the array until it becomes a sorted array.
  const left = mergeSort(arr.slice(0, mid));
  // recursively break down the right side of the array until it becomes a sorted array.
  const right = mergeSort(arr.slice(mid));
  // merge the two sorted sides back into one sorted array.
  return merge(left, right);
};