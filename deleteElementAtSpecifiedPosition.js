// Delete element at specific index

let arr = [10, 20, 30, 5, 15, 25];
let index = 2;

[arr[index], arr[arr.length - 1]] = [arr[arr.length - 1], arr[index]];

arr.pop();

console.log(arr)

// time complexity O(1)