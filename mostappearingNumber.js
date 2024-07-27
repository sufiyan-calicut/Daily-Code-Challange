/**
 * 1287. Element Appearing More Than 25% In Sorted Array
Easy
Topics
Companies
Hint
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
Example 2:

Input: arr = [1,1]
Output: 1
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let percent = Math.floor(arr.length / 4);
  let map = new Map();

  for (let num of arr) {
    if (!map.get(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }

    if (map.get(num) > percent) {
      return num;
    }
  }
};

let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
console.log(findSpecialInteger(arr));
