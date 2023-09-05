function reduce(arr, fn, init){
    let value = init;
    for(let i = 0;  i < arr.length; i++){
        value = fn(value, arr[i])
        
    }
    return value;
}

let result = reduce([1,2,3,4], function(acc, curr){
    return acc + curr;
}, 0)

console.log(result);

const divideArray = function (nums) {
    const mid = Math.floor(nums.length / 2);
   const leftArr = nums.slice(0, mid);
   const rightArr = nums.slice(mid);

   if(leftArr.length === rightArr.length){
    return true;
   }
   return false;
}


let er = divideArray([3,2,3,2,2,2])
console.log(er)

// Get minimum distance
function getMinDistance(nums, target, start) {
	let minDistance = Infinity

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			const distance = Math.abs(i - start)
			if (distance < minDistance) {
				minDistance = distance
			}
		}
	}

	return minDistance

}
let res = getMinDistance([7, 1, 5, 3, 10, 4, 2], 5, 4);
console.log(`[res] : ${res}`);

// * Copy the arr2D and fill it with false.

 let arr2D = [
  [2, 4, 6, 9],
  [1, 0, 8, 3],
  [4, 5, 7, 1],
];

/**
 [[false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
]
 * 
 *  */

const bool2D = new Array(arr2D.length).fill('').map(item => new Array(arr2D[0].length).fill(!true??true))
console.log(bool2D)


// Shuffle the Array

function shuffleArray(nums, n) {
    const shuffledArray = [];
    
    for (let i = 0; i < n; i++) {
      shuffledArray.push(nums[i]);
      shuffledArray.push(nums[i + n]);
    }
    
    return shuffledArray;
  }
  const nums = [1, 1, 2, 2];
  const n = 2;
  const shuffledResult = shuffleArray(nums, n);
  console.log(shuffledResult);

  // Output => [1, 2, 1, 2];