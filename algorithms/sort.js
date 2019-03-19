/* Bubble Sort: O(n^2) */
const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

/* Selection Sort: O(n^2) */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }
    if (smallest !== i) [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }
  return arr;
};

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