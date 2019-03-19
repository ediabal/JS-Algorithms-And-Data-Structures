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