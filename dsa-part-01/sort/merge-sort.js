//? MERGE_SORT_IDEA

//*  Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)
// * Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That wll be the sorted array.

//? MERGE_SORT_EXAMPLE

// [-6|20|8|-2|4]
// [-6 | 20]    [8|-2|4]

// [-6]  [20]   [8] [-2|4]

// [-6] [20]   [8] [-2] [4]

// [-6|20]     [8]  [-2|4]

// [-6|20]     [-2|4|8]

// [-6|-2|4|8|20]

// comparison

// [-6] [20] => [] Left & right are not empty -6 < 20
// [] [20] => [-6] Left is empty. Push right array;
// [] [] => [-6, 20]

// [8] [-2,4] => [] Left & right are not empty, -2 < 8
// [8] [4] => [-2] Left & right are not empty. 4 < 8
// [8] [] => [-2,4] Right is empty. Push left array.
// [] [] => [-2,4,8]

// Again Repeat the process.
// [-6, 20] [-2, 4, 8] => [] Left & right are not empty -6 < -2
// [20] [-2, 4, 8] => [-6] Left & right are not empty; -2 < 20
// [20] [4, 8] => [-6, -2] Left & right are not empty; 4 < 20
// [20] [8] => [-6, -2, 4] Left & right are not empty; 8 < 20
// [20] [] => [-6, -2, 4, 8] Right is empty; Push Right array.
// [] [] => [-6, -2, 4, 8, 20]

// Reduces the input size by half O(logn)
function mergeSort(arr) {
    if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}


// Contains while loop => O(n)
function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sortedArr.push(right.shift());
    } else {
      sortedArr.push(left.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

let result = mergeSort([-6, 20, 8, -2, 4]);
console.log(result);

// O(nlogn) ✅
