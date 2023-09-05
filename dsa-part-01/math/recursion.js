// * Recursion

// ? What ?
// * Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem.

// * Recursion is when a funcion calls itself

// ? Why ?
//* A great technique to simplify your solution.
//* If you find yourself breaking down your problem into smaller versions of the same problem recursion is very useful

// ? A few points about recursion

//* Every recursive solution needs to have a base case - a condition to terminate the recursion.

//* Recursion might simplify solving a problem but it doesnot always translate to a faster solution. A recursive solution may be far worse compared to an iterative solution.
[0, 1, 1, 2];
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
let result = recursiveFibonacci(6);
console.log(result);

// Time complexity => O(2^n) => horrible

// Recursive factorial of a number

// Problem - Give an integer 'n'. find the factorial of that integer.

// The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

// Factorial of 0 is 1.
// Factorial of f(4) , 4! = 4 * 3 * 2 * 1 => 24;

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(0)); // 120

// Time complexity => O(n)
