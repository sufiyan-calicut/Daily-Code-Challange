/**
 * 1636. Sort Array by Increasing Frequency
Easy
Topics
Companies
Hint
Given an array of integers nums, sort the array in increasing order based 
on the frequency of the values. If multiple values have the same frequency,
 sort them in decreasing order.

Return the sorted array.

 

Example 1:

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
Example 2:

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
Example 3:

Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
 
 */

var frequencySort = function(nums) {
    // Step 1: Count the frequency of each number
    const frequencyMap = {};
    for (const num of nums) {
      if (frequencyMap[num]) {
        frequencyMap[num]++;
      } else {
        frequencyMap[num] = 1;
      }
    }
  
    // Step 2: Sort the array based on frequency and value
    nums.sort((a, b) => {
      const freqA = frequencyMap[a];
      const freqB = frequencyMap[b];
  
      if (freqA === freqB) {
        // If frequencies are the same, sort by value in decreasing order
        return b - a;
      } else {
        // Otherwise, sort by frequency in increasing order
        return freqA - freqB;
      }
    });
  
    return nums;
  };
  
  // Example 1
  console.log(frequencySort([1,1,2,2,2,3])); // Output: [3, 1, 1, 2, 2, 2]
  
  // Example 2
  console.log(frequencySort([2,3,1,3,2])); // Output: [1, 3, 3, 2, 2]
  
  // Example 3
  console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1])); // Output: [5, -1, 4, 4, -6, -6, 1, 1, 1]
  
