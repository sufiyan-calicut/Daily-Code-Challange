/** SOLUTION : 1
 * 

let arr = [1, 3, [4, 4, 5, [5, 5, 5], 6, 7], 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
    arr = arr.flat();
}

console.log(arr);

*/

/**
 * SOLUTION : 2;
 
 */
let i = 0;

function convert(arr, newArr) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      convert(element, newArr);
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}

let arr = [1, 3, [4, 4, 5, [5, 5, 5], 6, 7], 7, 8, 9];
let newArr = [];

console.log(convert(arr, newArr));
