// ? Array

// An array is a data structure that can hold a collection of values.
// Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array.

// Arrays are resizable, you dont have to declare the size of an array before creating it.

// Javascript arrays are zero-indexed and the insertion order is maintained

// Arrays are iterables. They can be used with a for of loop.

const arr = [1, 2, 3, "Manish", true];

// add element to the end of an array
arr.push(4); // O(1)

// add element to the beginning of an array
arr.unshift(12); // O(n)

// remove element from the end of an array
arr.pop(); // O(1)

// remove element from the beginning of an array
arr.shift(); // O(n)

// accessing element using for of loop
for (let item of arr) console.log(item); // O(n)

// shift/unshift/concat/slice/splice - O(n)

// forEach/map/filter/reduce-O(n)
