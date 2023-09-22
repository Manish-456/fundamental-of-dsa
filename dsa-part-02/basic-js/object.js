// ? Object
//* An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type.

// * To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation.


//* An object is not an iterable. You cannot use it with a for of loop

const obj = {
    name : "Bruce",
    "key-three" : true,
    sayMyName : function(){
     return this.name
    }
};
// obj.hobby = "Coding"
// delete obj.hobby
// console.log(obj.name)
// console.log(obj["key-three"])
// console.log(obj.sayMyName())

// console.log(typeof obj.sayMyName)
for(let key in obj){
     if(typeof obj[key] === "function"){
        console.log("fn", obj[key]());
     }
     console.log(obj[key])
}

console.log(Object.entries(obj))
// console.log(Object.values(obj));

// Object - Big-O time complexity

/*
insert-O(1)
remove-O(1)
access-O(1)
search-O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)
*/