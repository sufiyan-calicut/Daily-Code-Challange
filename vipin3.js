let arr = [12, 14, 9, 8, 6, 45];
let expected = [12 + 45, 12 + 14, 14 + 6, 14 + 9, 9 + 8, 9 + 8];
// 57, 26, 20, 23, 17, 17

// if arr is let arr = [12, 14, 9, 8, 6, 45,10];
// answer should be like =  22,26,59,23,15,17

let start = 0;
let end = arr.length - 1;

let newArr = [];
while (start < end) {
  let sum1 = arr[start] + arr[end];
  let sum2 = arr[start] + arr[start + 1];
  newArr.push(sum1, sum2);

  start++;
  end--;
}
 
console.log(newArr);
