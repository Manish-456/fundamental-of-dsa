//? Map

//* A map is an ordered collection of key-value pairs. Both keys and values can be of any data type.

// * To retrieve a value, we can use the corresponding key

//* Map are iterables. They can be used with a for of loop.

//? Object vs Map
/* 
Objects are unordered wheras maps are ordered.

Keys in objects can only be string or symbol type whereas in maps, they can be of any type.

An object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful. A map on the other hand doesnot contain any keys by default.

Objects are not iterable whereas maps are iterables.

The number of items in an object must be determined manually where as it is readily available with the size property in a map.

Apart from storing data you can attach functionality to an object whereas maps are restricted for just storing data.
*/

// examples

const map = new Map([['a', 1], ['b', 2]]);
map.set(true, 1);
map.set(false, 0);

map.delete(true)
console.log(map.has(false));
console.log(map.size)
map.clear()

for(const [key, value] of map){
    console.log(`${key} : ${value}`)
}