// Insertion Sort idea

// Virtually split the array into a sorted and an unsorted part.
// Assume that the first element is already sorted and remaining elements are unsorted.
// Select an unsorted element and compare with all elements in the sorted part.
// if the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right.

// Insert the selected element at the right index
// Repeat till all the unsorted elements are placed in the right order.

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numToInsert = nums[i];
    let j = i - 1;

    while (nums[j] > numToInsert && j >= 0) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = numToInsert;
  }
}
let arr = [8, 20, -6, 4, -2];
insertionSort(arr); // O(n^2) as the number of element in the array increases , the number of comparison increases by sqaure of that number
console.log(arr);

// Insertion sort example

// fn(nums)

// First round
// numToInsert = 20
// j = 0;
// nums[j] > numToInsert && j >= 0
// nums[j+1] = numToInsert = nums[1] = 20

// second round
// numToInsert = 8
// j = 1;
// nums[j]> numToInsert && j >= 0 ? true
// nums[2] = nums[1] = 20;
// j = 0
// 0 > 8 ? false
// nums[j + 1] = 8

//  [-6, 8, 20] and so on


