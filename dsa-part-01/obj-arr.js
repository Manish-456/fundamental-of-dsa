//* Objects

// An Object is a collection of key-value pairs.

const Person = {
  firstName: "Bruce",
  lastName: "Wayne",
};
// Insert - O(1) => constant
// Remove - O(1) => constant
// Access - O(1)

// * No Matter how many property exists in the object the time it takes to remove and insert is constant

// * Accessing Person.firstName does not depend on other properties present in an object.

// * Search - O(n)

//* To search the value "Wayne" we have to search every element present in an object

//* Object.keys() - O(n) -> return an array of all the keys of an object.

//* Object.values() -> O(n) -> return an array of all the values of an object

//* Object.entries -> O(n)

// ? Array - Big-O
// An array is an ordered collection of values

const odd = [1, 3, 5, 7, 9];

//* Insert/remove at end - O(1) => {push, pop}
//* Insert/remove at beginnig - O(n) => {shift, unshift}
//* Access - O(1)
//* Search - O(n)

//* Shift/unshift/concat/slice/splice - O(n)
//* forEach/map/filter/reduce - O(n)


