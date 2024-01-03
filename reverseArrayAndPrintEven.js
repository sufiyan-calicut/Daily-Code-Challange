// reverse the given array and print even;

let arr = [1, 2, 3, 4, 5, 6];
let start = 0;
let end = arr.length - 1;

while (start < end) {
  if (arr[start] % 2 === 0) {
    console.log(arr[start]);
  }
  if (arr[end] % 2 === 0) {
    console.log(arr[end]);
  }
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}

console.log(arr);

// time complexity is O (log n)
