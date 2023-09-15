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