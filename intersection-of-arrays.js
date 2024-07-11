/**
 * Given two integer arrays nums1 and nums2, 
 * return an array of their intersection. Each element 
 * in the result must appear as many times as it shows in both 
 * arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 */

var intersect = function (nums1, nums2) {
  // Binary Search Function
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return mid; // Target found, return index
      } else if (arr[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }

    return -1; // Target not found
  }

  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let arr = [];

  for (let i = 0; i < nums1.length; i++) {
    let index = binarySearch(nums2, nums1[i]);
    if (index !== -1) {
      arr.push(nums1[i]);
      nums2.splice(index, 1);
    }
  }

  return arr;
};

let nums1 = [1,2,2,1];
let nums2 = [2,2];
let resu = intersect(nums1, nums2);
console.log(resu);
