const arr = [1, 3, 6, 2, 4, 7, 5];
const max = Math.max(...arr); //it is the easy way but sometime we are not allowed to use build in methods
let maxElement = arr[Math.floor(arr.length / 2)];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxElement) {
    maxElement = arr[i];
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(
  `The largest element in array is ${maxElement} and its factorial is ${factorial(
    maxElement
  )}`
);

// factorial(4) returns 4 * factorial(3)
//   factorial(3) returns 3 * factorial(2)
//    factorial(2) returns 2 * factorial(1)
//      factorial(1) returns 1 (base case)
//    So, 2 * 1 = 2
//   3 * 2 = 6
// 4 * 6 = 24
