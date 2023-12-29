// let arr = [4, 3, 2, 1, 5];

// output =
/*
4*4*4*4
3*3*3
2*2
1
5*5*5*5*5
*/

let arr = [4, 3, 2, 1, 5];
let str = '';

for (let i = 0; i < arr.length; i++) {
  let n = 2 * arr[i];
  for (let j = 1; j < n; j++) {
    if (j % 2 == 1) {
      str += arr[i];
    } else {
      str += '*';
    }
  }
  str += '\n';
}
console.log(str);
