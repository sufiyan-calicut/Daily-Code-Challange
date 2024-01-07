let arr = [30, 20, 40, 70, 50, 10, 80, 60, 90];
let expectedArr = [40, 20, 30, 10, 50, 70, 90, 60, 80];

/**  one way is
 * 
let newArr = [];

for (let i = 0; i < arr.length; i += 3) {
    let chunk = arr.slice(i, i + 3);
    chunk.reverse();
    newArr.push(...chunk);
}
console.log(newArr);

*/

// anther way

for (let i = 0; i < arr.length; i += 3) {
  [arr[i], arr[i + 2]] = [arr[i + 2], arr[i]];
}
console.log(arr)
