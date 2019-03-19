/* Insertion Sort: O(n^2) */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i], j;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }
  return arr;
};