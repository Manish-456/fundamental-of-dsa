// Array -> Declaration

let arr = ["apple", "banana", "cherry", { name: { greet: "hello manish" } }];

// accessing an array element
console.log(arr[3].name.greet);
arr.unshift("12");
console.log(arr.findIndex((val) => val === "banana"));
console.log(arr);

let nums = [1, 2, 3 ,4 ,5, 6];

let res = nums.map((num, index) => num + index);
console.log(res);

// function permute(arr, currentIndex = 0) {
//     if (currentIndex === arr.length - 1) {
//       console.log(arr); // Print the permutation
//       return;
//     }
  
//     for (let i = currentIndex; i < arr.length; i++) {
//       // Swap the current element with itself and all subsequent elements
//       [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]];
  
//       // Recursively generate permutations for the rest of the array
//       permute(arr, currentIndex + 1);
  
//       // Restore the original order for backtracking
//       [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]];
//     }
//   }
  
//   const inputArray = [1, 2, 3];
//   permute(inputArray);
  