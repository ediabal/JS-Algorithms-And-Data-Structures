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