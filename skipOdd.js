// skip to elements if the element is odd

function skipOdd(array) {
  let newAr = [];
  for (let i = 0; i < array.length; i++) {
    let value = array.splice(i, 1);
    newAr.push(value[0]);
    // console.log(array[i]);
    if (array[i] % 2 == 1) {
      i = i + 2;
    }
  }
  return newAr;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(skipOdd(array));
