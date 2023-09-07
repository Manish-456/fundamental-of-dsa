function recursiveBinarySearch(arr, target) {
  return binarySearch(arr, target, 0, arr.length - 1);
}

function binarySearch(arr, target, start, end) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}
let arr = [-2, 4, 6, 8, 9, 12, 24];
console.log(recursiveBinarySearch(arr, 9));
