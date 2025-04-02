function hasTargetSum(array, target) {
  // Create a set to store numbers we've seen
  const seenNumbers = new Set();

  for (const num of array) {
    const difference = target - num;

    // Check if the difference is already in the set
    if (seenNumbers.has(difference)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(num);
  }

  // If we complete the loop without finding a pair, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  Time Complexity: O(n), where n is the size of the array.
  Space Complexity: O(n), due to the storage used by the Set.
*/

/* 
  Add your pseudocode here:
  1. Initialize an empty Set to keep track of numbers we have seen.
  2. Iterate through each number in the array:
      - Compute the difference between the target and the current number.
      - If the difference exists in the Set, return true.
      - Otherwise, add the current number to the Set.
  3. If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here:
  This function checks if any two numbers in the array add up to the target sum.
  It uses a Set to store numbers already encountered while iterating through the array.
  For each number, it calculates the difference between the target and the current number.
  If the difference exists in the Set, it means we found a pair that adds up to the target.
  Otherwise, the number is added to the Set for future comparisons. If no pair is found by
  the end of the loop, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  // Additional test cases
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-5, 15, 10, 20], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5, 5], 10));
}

module.exports = hasTargetSum;
