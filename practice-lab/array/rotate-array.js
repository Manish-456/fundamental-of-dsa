// function rotateArray(arr, k){
//  let size = arr.length;

//  if(size > k){
//     k = k % size;  // => 3
//  }
// let rotated = arr.splice(size - k, size);  O(n)
// arr.unshift(...rotated) // O(n)
// }

// O(n) + O(n) => O(n)

function optimizedRotatedArray(arr, k) {
  let size = arr.length;
  if (size > k) {
    k = k % size; // => 3
  }
  console.log(k);
  rotateArray(arr, 0, size - 1);
  rotateArray(arr, 0, k - 1);
  rotateArray(arr, k, size - 1);
}

function rotateArray(arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
}
let arr = [1, 2, 3, 4, 5, 6];
optimizedRotatedArray(arr, 2);
console.log(arr);

// Pseudo code => [1,2,3,4,5,6] => [6,5,4,3,2,1] => [4,5,6,3,2,1] => [4,5,6,1,2,3]
// arr=[1, 2, 3, 4, 5, 6]     arr = [6, 5, 4, 3, 2, 1]    arr = [4,5,6,3,2,1]; size = 6;
// rotateArray(arr, 0, 5);  rotateArray(arr, 0, k - 1)    rotateArray(arr, k, size - 1)
// temp = 1;                temp = 6                         temp = 3;
// left = 0                 left = 0;                         left = 3;
//right = 5                 right = 2;                       right = 5;

// arr[0] = 6;              arr[0] = 4;                      arr[3] = 1;
// arr[5] = 1;              arr[2] = 6;                      arr[5] = 3;
// left = 1;                left = 1;                        left = 4;
// right = 4                right = 1;                       right = 4;

// temp = 2                 temp = 5;                        temp = 2;
// arr[1] = 5;              arr[1] = 5;                      arr[4] = 2;
// arr[4] = 2;              arr[1] = 5;                      arr[4] = 2;
// left = 2;                left = 2;                        left = 5;
// right = 3;               right = 0;                       right = 3;

// temp = 3;                 [4,5,6,3,2,1];                 [4, 5, 6, 1, 2, 3]
// arr[2] = 4;
// arr[3] = 3;
// left = 3;
// right = 2;

// [6, 5, 4, 3, 2, 1]

// Final Output : [4, 5, 6, 1, 2, 3]
