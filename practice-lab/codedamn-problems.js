const encode = (plainText) => {
  const consecutiveChars = /([\w\s])\1*/g;
  return plainText.replace(consecutiveChars, (match) =>
    match.length > 1 ? match.length + match[0] : match[0]
  );
};

const decode = (encodedText) => {
  const countAndChar = /(\d+)(\w|\s)/g;
  return encodedText.replace(countAndChar, (match, repeats, char) =>
    new Array(Number(repeats) + 1).join(char)
  );
};

let txt = "mmmmaaaannnniiiisssshhh";
console.log(encode(txt));

// *********************************************************** //
function smallerNumbersThanCurrent(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

//[8,1,2,2,3] Output: [4,0,1,1,3]

// Unicode generator

function unicodeGenerator(emoji) {
  let unicode = emoji.charCodeAt(0);
  return `Unicode of ${emoji} is U+${unicode.toString(16)}`;
}

let unicode = unicodeGenerator("🐔");
console.log(unicode);

// Get Average Salary

// Test-Case : [200, 3000, 1000, 2000] => 1500
function getAverageSalary(salary) {
  let minValue = Number.MAX_VALUE;
  let maxValue = Number.MIN_VALUE;
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    sum += salary[i];
    minValue = Math.min(minValue, salary[i]);
    maxValue = Math.max(maxValue, salary[i]);
  }
  sum -= minValue + maxValue;

  return sum / (salary.length - 2);
}

let result = getAverageSalary([200, 3000, 1000, 2000]);
console.log(result);

// find closest number to 0

const findClosestNumber = function (...nums) {
  let closestNumber = nums[0];

  nums.forEach((num) => {
    if (Math.abs(num) < Math.abs(closestNumber)) {
      closestNumber = num;
    } else if (Math.abs(num) === Math.abs(closestNumber)) {
      closestNumber = Math.max(closestNumber, num);
    }
  });

  return closestNumber;
};

console.log(findClosestNumber(5, 9, -3, 2, -1));

// you will be implementing a function called kidsWithCandies, which will determine if a kid will have the greatest number of candies after receiving extra candies. This function takes an integer array candies, representing the number of candies each kid has, and an integer extraCandies, denoting the number of extra candies that you have. The function should return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extra candies, they will have the greatest number of candies among all kids, or false otherwise.

// Explanation
// If you give all extraCandies to:

// Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

// solution


const kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = Math.max(...candies);
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= maxCandies);
  }
  return result;
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
const results = kidsWithCandies(candies, extraCandies);
console.log(results); // Output: [true, true, true, false, true]


// 

function findFinalValue(nums, original) {
  if (!nums.includes(original)) {
    return original;
  }

  return findFinalValue(nums, original * 2);
}

console.log(findFinalValue([2, 7, 9], 4));


// truncate word

const truncateSentence = function (s, k) {
  return s.split(" ").splice(0,k).join(" ");
}

console.log(truncateSentence("Hello I love you Rusuna", 4));

var prefixCount = function (words, pref) {
  let count = 0;
for(let word of words){
  if(word.startsWith(pref)){
      count ++;
  }
}
return count;
}

console.log(prefixCount(  ["pay","attention","practice","attend"],"at"))

const jsonStringify = function (object) {
const type = typeof object

if (type === 'string') {
  return `"${object}"`
} else if (type === 'boolean' || type === 'number' || object === null) {
  return String(object)
} else if (Array.isArray(object)) {
  const arrayElements = object.map((element) => jsonStringify(element))
  return `[${arrayElements.join(',')}]`
} else {
  const objectEntries = Object.entries(object).map(([key, value]) => {
    return `"${key}":${jsonStringify(value)}`
  })
  return `{${objectEntries.join(',')}}`
}
}

console.log(jsonStringify({"a":"str","b":-12,"c":true,"d":null}))

function countWords(word1, word2){
  let map1 = new Map();
  let map2 = new Map();
  let totalCount = 0;

  for(let word of words1){
    map1.set(word, (map1.get(word) || 0) + 1)
  }
  for(let word of words2){
    map2.set(word, (map2.get(word) || 0) + 1)
  }

  let iterator = map1.keys();
  for(let word of iterator){
  if(map1.get(word) === 1 && map2.get(word) === 1){
    totalCount ++;
  }
  }
 return totalCount;
}
let words1 = ["leetcode", "is", "amazing", "as", "is"]
let words2 = ["amazing", "leetcode", "is"]
countWords(words1, words2); // expected output => 2;


//  Fair candy swap

// you will be solving a problem related to Alice and Bob's fair candy swap. The main objective is to implement a function fairCandySwap that takes two integer arrays, aliceSizes and bobSizes, representing the number of candies in each box that Alice and Bob have, respectively. Your task is to find an integer array answer where answer[0] corresponds to the number of candies in the box that Alice must exchange, and answer[1] denotes the number of candies in the box that Bob must exchange. After the exchange, both Alice and Bob should have the same total amount of candy. You can assume that at least one valid answer exists for the given input.

// Examples
/*
Input: aliceSizes = [1, 1], bobSizes = [2, 2] Output: [1, 2]

Input: aliceSizes = [1, 2], bobSizes = [2, 3] Output: [1, 2] or [2, 3]

Input: aliceSizes = [2], bobSizes = [1, 3] Output: [2, 3]
*/
function fairCandySwap(aliceSizes, bobSizes){
  let aliceSum = aliceSizes.reduce((a, b) => a + b, 0)
  let bobSum = bobSizes.reduce((a, b) => a + b, 0)
  let diff = (bobSum - aliceSum) / 2;
 
  let bobSet = new Set(bobSizes);
  for(let size of aliceSizes){
   if(bobSet.has(size + diff)){
       console.log([size, size + diff])
   }
  }
 
 }
 
 fairCandySwap([1,2], [2,3]);