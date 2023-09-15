// ? Cartesian product
//* Given two infinite non-empty sets, find their Cartesian Product.

// In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AxB, is the set of all ordered pairs (a, b) where a is in A and b is in B.

function cartesianProduct(a, b) {

    let AxB = [];
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            AxB.push([a[i], b[j]]);
        }
    }
  return AxB;
}
console.log(cartesianProduct([1,2],[3,4,5]));
// Big-O= O(mn)

