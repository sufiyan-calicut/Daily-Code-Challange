// Merge and arrange in Descending order

function sort(...array) {
  for (let i = 0; i < array.length; i++) {
    let max = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        max = j;
      }
    }
    if (i != max) {
      [array[max], array[i]] = [array[i], array[max]];
    }
  }
  return array;
}

let arr1 = [10, 20, 50, 30, 40];
let arr2 = [40, 30, 80, 90];

let descSorted = sort(...arr1, ...arr2);

console.log(descSorted);
