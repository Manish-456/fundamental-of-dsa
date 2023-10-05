// ? HASH TABLE

/* A hash table, also known as hash map, is a data structure that is used to store key-value pairs

 - Given a key, you can associate a value with that key for very fast lookup

 - Javascript's Object is a special implementation of the hash table data structure. However, Objects can adds its own keys. Keys that you input may conflict and overwrite the inherited default properties

 Map which were introduced in 2015 allow you to store key-value pairs


*/

// ? HASH TABLE IDEA
/*
- We store the key-value pairs in a fixed size array

- Arrays have a numeric index

- How do we go from using a string as an index to numer as an index?
-> A hashing function accepts the string key. Converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array.

Using the index, store the value

The same hashing function is reused to retrieve the value given a key
 - Set to store a key-value pair
 - Get to retrieve a value given its key
 - Remove to delete a key value pair
*/

//? Hash Table Usage
/*  Hash tables are typically implemented where constant time lookup and insertion are required

Database indexing
Caches
*/

// ? HASH TABLE IMPLEMENTATION
/*
 - Set to store a key-value pair
 - Get to retrieve a value given its key
 - Remove to delete a key value pair
 - Hashing function to convert a string key to a numeric index
*/

class HashTable {
    constructor(size){
       this.table = new Array(size);
       this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }

    set(key, value){
        const index = this.hash(key);
        const bucket = this.table[index];
        
        if(!bucket){
            this.table[index] = [[key, value]];
        }else {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key, value]);
            }
        }

    }

    get(key){
        const index = this.hash(key);
        // return this.table[index];
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }

        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    print(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(20);
table.set('np', 'Nepal');
table.set('age', 25);
table.set('name', 'bruce');
table.set('name', 'diana')
table.set("mane", 'mansi')
console.log(table.get('name'))
table.print()




