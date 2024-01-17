let arr = ['one', 'two', 'three', 'four', 'five', 'four', 'two'];

for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  for (let j = i + 1; j < arr.length; j++) {
    if (element == arr[j]) {
      arr.splice(j, 1);
    }
  }
}

console.log(arr);


/**
 * also can do it with
 */

let duplicate = [1,2,3,'one','two','three',3,'one'];
let unique = [...new Set(duplicate)];
console.log(unique)