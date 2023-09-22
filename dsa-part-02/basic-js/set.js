// ? SET
//* A set is a data structure that can hold a collection of values. The values however must be unique.

//* Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set.

//* Sets are dynamically sized. You don't have to declare the size of a set before creating it.

//* Sets do not maintain an insertion order

//* Sets are iterables. they can be used with for of loop.

// ? SET VS ARRAY

/* 
 Arrays can contain duplicate values whereas Sets cannot.
 Insertion order is maintained in arrays but it is not the case with sets.
 Searching and deleting an element in the set is faster compared to arrays.
*/

const set = new Set([1, 2, 3]); // Constructor optionally accepts an array as an argument.

set.add(4);
set.add(4); // If you try to add duplicate value. It will ignore that value

// Check if the value exists in set or not
console.log(set.has(4));

// delete an element from the set
set.delete(4);

// check the size of the Set
console.log(set.size)

// Remove all the elements from the set
set.clear()

for(const item of set){
    console.log(item)
}



