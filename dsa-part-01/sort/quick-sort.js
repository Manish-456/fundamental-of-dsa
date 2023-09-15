// Quick Sort idea

// identify the pivot element in the array
// Pick last element as pivot (My approach)
// Pick a random element as pivot
// Pick median as pivot

// Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array.

// Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition.

// Repeatedly concatenate the left array, pivot and right array till one sorted array remains.

// example
/**
 * [-6|20|8|-2|4]  =>   [-6 | -2 | 4 | 8 | 20]
 *          left                    pivot   right
 *          [-6|-2] [-6 | -2]       [4]    [20|8] [8 | 20]
 *
 *       left    pivot   right      [4]   left    pivot   right
 *     [-6]      [-2]    []               []      [8]     [20]
 *
 */

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
let result = quickSort([-6, 20, 8, -2, 4]);
console.log(result);

// Worst : O(n^2) => this happens when the array is already sorted
// average : (nlogn) => we recursively divide the array into smaller array which is "logn" and we also have a for loop which is 'n' . By combining this two the average time complexity will be O(nlogn)
