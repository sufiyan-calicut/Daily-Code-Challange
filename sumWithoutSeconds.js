// find the sum of array without second largest and second smallest;

let arr = [52, 2, 98, 1, 5, 29, 3];
let smallest = Math.min(...arr);
let secondSmallest = Math.max(...arr);
let largest = Math.max(...arr);
let secondLargest = Math.min(...arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < largest && arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
  if (arr[i] > smallest && arr[i] < secondSmallest) {
    secondSmallest = arr[i];
  }
}

arr.splice(arr.indexOf(secondSmallest), 1);
arr.splice(arr.indexOf(secondLargest), 1);
let sum = arr.reduce((curr, acc) => curr + acc, 0);

console.log(sum);
