function fibonacci(n){
  let fib = [0 , 1];
  for(let i = 2; i < n; i++){
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib;
}

console.log(fibonacci(6))

// In Mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// let num = 6;
// let res = factorial(num);
// console.log(res);

//* Time Complexity
// O(n) => linear time complexity => as the size of the input increases, the number of times line 7 executes increases.

// function isPrime(n){
//     if(n < 2) return false;

//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

function isPrime(n){
    if(n < 2) return false;

    for(let i = 2; i <= Math.sqrt(n); i++){
        console.log(i);
        if(n % i === 0){
        return false;
        }
    }
    return true;
}

// console.log(isPrime(9)) // O(n)

// function isPowerOfTwo(n){
//  if(n < 1) {
//   return false;
//  }
//  while(n > 1){
//   if(n % 2 !== 0){
//     return false;
//   }
//   n = n / 2;
//  }

//  return true;
// }

// time complexity => O(logn) =>logarithmic


function isPowerOfTwoBitwise(n){
  if(n < 1) return false;
  return (n & (n - 1)) === 0
}
console.log(isPowerOfTwoBitwise(1)) // true
console.log(isPowerOfTwoBitwise(3)) // true
console.log(isPowerOfTwoBitwise(5)) // false