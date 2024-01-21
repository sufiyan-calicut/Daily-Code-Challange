/***
 * 
 * Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.
Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
Example 2:

Input: arr = [11,81,94,43,3]
Output: 444

*/

function convertArray(arr, sub, x, k) {
  for (let i = 0; i < x; i++) {
    sub.push(arr.slice(i, k));
    k++;
  }
}

let arr = [3,1,2,4];
let Output = 444;


let x = arr.length;
let y = 1;
let k = 1;
let sub = [];
let sum = 0;
while (y <= x) {
  convertArray(arr, sub, x, k);
  x--;
  k++;
}

for (let subArray of sub) {
  sum += Math.min(...subArray);
}

console.log(sum);
