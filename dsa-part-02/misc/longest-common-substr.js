// function findLongestCommonSubstring(str1, str2) {
//     const m = str1.length;
//     const n = str2.length;

//     // Create a table to store the length of the common substring
//     const table = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

//     // Variables to store the length of the longest common substring and its ending position
//     let maxLength = 0;
//     let endIndex = 0;

//     for (let i = 1; i <= m; i++) {
//       for (let j = 1; j <= n; j++) {
//         if (str1[i - 1] === str2[j - 1]) {
//           table[i][j] = table[i - 1][j - 1] + 1;
//           if (table[i][j] > maxLength) {
//             maxLength = table[i][j];
//             endIndex = i - 1; // Update the ending position
//           }
//         } else {
//           table[i][j] = 0;
//         }
//       }
//     }

//     // Extract the longest common substring
//     const longestCommonSubstring = str1.slice(endIndex - maxLength + 1, endIndex + 1);

//     return longestCommonSubstring;
//   }

//   const str1 = "abcdef";
//   const str2 = "abcxyzdef";
//   const longestCommon = findLongestCommonSubstring(str1, str2);
//   console.log("Longest Common Substring:", longestCommon);

// find the length of the longest substring without repeating the characters

function findLengthofLongestSubstring(str) {
  // sliding window
  let start = 0,
    end = 0,
    maxLength = 0;

  let uniqueSet = new Set();
  while (end <= str.length) {
    if (!uniqueSet.has(str[end])) {
      uniqueSet.add(str[end++]);
      maxLength = Math.max(maxLength, uniqueSet.size);
    } else {
      uniqueSet.delete(str[start++]);

    }
  }
  return maxLength;
}

let str = "abcabcbb";
let length = findLengthofLongestSubstring(str);
console.log(length) // => 3

// initial str = abcabcbb

// Sliding window
// start = 0;
// end = 0;
// maxLength = 0;

// new Set();
// str = abcabcbb

// !set.has(str[end])
// set.add(str[end])
// end ++;
// maxLength = Math.max(maxLength, set.size)

// abcbb
// abc
// start = 0;
// end = 3;
// maxLength = 3;

// bcabcbb
// start = 1;
// end =
// set.has(str[end])
//
