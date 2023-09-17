//# Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time.

//# n = 1, climbingStaircase(1) = 1     | (1)
//# n = 2, climbingStaircase(2) = 2     | (1,1) and (2)
//# n = 3, climbingStaircase(3) = 3     | (1,1,1), (1,2) and (2,1)
//# n = 4, climbingStaircase(4) = 5     | (1,1,1,1), (1,2,1),(1,1,2),(2,1,1) and (2,2)


// ? Climbing staircase idea

//# At any given time, you can climb either 1 step or 2 steps
//# If you have to climb to step `n`, we can only climb from step 'n-1' or 'n-2'
//# Calculate the ways we can climb to 'n-1' and 'n-2' steps and add the two

// climbingStaircase(n) = climbingStaircase(n-1) + climbStaircase(n-2)

function climbingStaircase(n){
  let noOfWays = [1,2];
  for(let i = 2; i <= n; i++){
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
  }
  return noOfWays[n - 1];
}

console.log(climbingStaircase(4))
//Time complexity => O(n)

// n = 4
// n - 1 + n - 2
// 3 + 
// 2
//1