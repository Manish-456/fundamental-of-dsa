// ? Problem - Given an array of integers, sort the array.

//* arr = [-6, 20, 8, -2, 4]
//* bubbleSort(arr) => should return [-6, -2, 4, 8, 20]

//* Bubble Sort idea.

/**
 * Compare adjacent elements in the array and swap the positions if they are not in the intended order
 * Repeat the instruction as you step through each element in the array.
 * Once you step through the whole array with no swaps, the array is sorted.
 */

// Pseudo Code

/**  i > i + 1
 *  [-6, 20, 8, -2, 4]
 * [-6, 20, 8, -2, 4] => [-6, 8, 20, -2, 4] Swap since 20 > 8
 * [-6, 8, 20, -2, 4] => [-6, 8, -2, 20, 4] Swap since 20 > -2
 * [-6, 8, -2, 20, 4]=> [-6, 8, -2, 4, 20] Swap since 20 > -2
 * End of array. Elements swapped ? Yes ? Repeat the comparison
 * [-6, 8, -2, 4, 20]
 * [-6, 8, -2, 4, 20] => [-6, -2, 8, 4, 20] Swap since 8 > -2
 * [-6, -2, 8, 4, 20] => [-6, -2, 4, 8, 20] Swap since 8 > 4
 * [-6, -2, 8, 4, 20]
 * End of array. Elements swapped ? Yes ? Repeat the comparison.
 * [-6, -2, 8, 4, 20] [-6, -2, 8, 4, 20] [-6, -2, 8, 4, 20] [-6, -2, 8, 4, 20]
 * End of array. Elements swapped ? False ? Array is sorted.
 */

function bubbleSort(nums) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

let arr = [-6, 20, 8, -2, 4];
bubbleSort(arr);
console.log(arr);

// Time Complexity => O(n^2)
