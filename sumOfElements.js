
/* 
step1 : 1,2,3,4
1 + 2 = 3;
2 + 3 = 5;
3 + 4 = 7;

step2 : 3,5,7
3+5 = 8;
5+7 = 12;

return 8 + 12;

*/

function findSum(arr, newar = []) {
  if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      let total = arr[i] + arr[i + 1];
      newar.push(total);
    }
    return findSum(newar, []);
  } else {
    return arr[0];
  }
}
const arr = [1, 2, 3, 4];

const sum = findSum(arr);
console.log(sum);
