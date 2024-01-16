let arr = [50, 30, 40, 90, 80, 10, 20, 70, 60];

let expectedArr = [70, 60, 50, 30, 10, 20, 40, 90, 80];

//  *  solution 1
/**
 * 
let start = 0;
let end = arr.length - 1;
let newArr = [];

while (start < end) {
  newArr.push(arr.slice(end - 1, end + 1));
  newArr.push(arr.slice(start, start + 2));

  start += 2;
  end -= 2;
  
  if (start == end) {
      newArr.push(arr[start]);
    }
}

console.log(start, end);
newArr.flat();
console.log(newArr.flat());
*/

// solution 2

let start = 0;
let end = arr.length - 1;
let newArr = [];

while (start < end) {
  newArr.push(arr[end - 1], arr[end]);
  newArr.push(arr[start], arr[start + 1]);

  start += 2;
  end -= 2;

  if (start == end) {
    newArr.push(arr[start]); 
  }
}

console.log(newArr);
