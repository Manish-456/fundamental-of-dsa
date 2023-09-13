// Ques 3 : Kth Missing positive Number
// Given an array arr of positive integers sorted in a strictly increasing order.
// and integer k. Return the kth positive integer that is missing from this array.

// Input : arr = [2, 3, 4, 7, 11], k = 5 ------>> Output : 9
// Explanation : The missing positive integers are [1,5,6,8,9,10,12,13,.....];
// The 5th missing positive integer is 9.


function findKthPositive(arr, k){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= k + count){
            count ++;
        }
    }
    return k + count; 
}

console.log(findKthPositive([2,3,4,7,11], 5));

// count = 0;
// 2 <= 5 => true => 1
// 3 <= 6 => true => 2
// 4 <= 7 => true => 3
// 7 <= 8 true => 4
// 11 <= 9 ? false
// 5 + 4 => 9

