// ? - Find the permutations and combinations of a list of numbers

// ! Todo : Understand what's happening underthehood

// Permutations are all possible arrangements of element from the set
// ["a", "b", "c"]
// ["a", "c", "b"]
// ["b", "a", "c"]
// ["b", "c", "a"]
// ["c", "a", "b"]
// ["c", "b", "a"]

// 
function getPermutation(arr){
  let result = [];
  function permute(current, remaining){
    if(remaining.length === 0){
      result.push([...current]);
    }

   for(let i = 0; i < remaining.length; i++){
    let newCurrent = [...current, remaining[i]];
    let newRemaining = [...remaining.slice(0,i), ...remaining.slice(i + 1)];
    permute(newCurrent, newRemaining);
   }
  };
  permute([], arr);
  return result;
}

let arr = ["a", "b", "c"];
let perm = getPermutation(arr);
console.log(`Permutation of ${arr} is ${perm}`);

// Combination

function getCombinations(arr, k) {
  const result = [];

  function combine(current, start) {
    if (current.length === k) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      combine(current, i + 1);
      current.pop();
    }
  }

  combine([], 0);
  return result;
}

const numbers = ["a", "b", "c"];
const k = 2; // Number of elements in each combination
const combinations = getCombinations(numbers, k);
console.log(`Combination of ${numbers} is `, combinations);
