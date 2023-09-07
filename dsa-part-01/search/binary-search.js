//* Binary Search Algorithm

//* Given a sorted array of 'n' elements and a target element 't', find  the index of 't' in the array. Return -1 if the target element is not found

// arr = [-5, 2, 4, 6, 10], t = 10 => shoule return 4;


// * Binary Search Pseudocode
/**
 * If the array is empty, return -1 as the element cannot be found.
 * 
 * If the array has elements find the middle element in the array. If the target is equal to the middle element, return the middle element index.
 * 
 * If target is less than the middle element, binary search left half of the array.
 * 
 * If target is greater than middle element, binary search right half of the array.
 */

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === target) return mid;

        if(arr[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return -1;
}

let arr = [-5, 2, 4, 6, 10];
console.log(binarySearch(arr, 10))

// * Time complexity => O(logn) => quadratic time complexity reducing the search space in half with each comparison