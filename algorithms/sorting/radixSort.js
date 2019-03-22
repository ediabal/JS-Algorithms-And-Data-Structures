/* Radix Sort: O(nk)
 *
 * The radix sort works by bucketing the values according to their values
 * at a certain digit. Unlike other sorting methods this one doesn't actually
 * do any comparisons.
 * 
 * The complexity of this algorithm is O(nk) due to having to iterate over
 * the maximum number of digits possible and the number of elements in the
 * array.
*/
const getDigit = (num, place) => {
  // get the digit at the provided place by taking the remainder of
  // the absolute value divided by 10 to the power of the place
  // divided by 10
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  // find the number of digits by taking log base 10 of the absolute
  // value of the number
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const maxDigits = (nums) => {
  let max = 0;
  // iterate over the numbers until max equals the number with the
  // most digits.
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
};

const radixSort = (nums) => {
  // find the maximum number of digits
  let maxDigitCount = maxDigits(nums);
  // iterate for each 10's place
  for (let k = 0; k < maxDigitCount; k++) {
    // create buckets for the 0 - 9 values
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      // find the digit at the current place and push the number
      // into the bucket for it's digit value
      bucket[getDigit(nums[i], k)].push(nums[i]);
    }
    // flatten the buckets int nums
    nums = [].concat(...buckets);
  }
  return nums;
};