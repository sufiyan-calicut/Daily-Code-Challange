// let string = 'asim fayas'
// output = 'Misa Sayaf'

let string = 'asim fayas';

let result = string.split(' ').map(element => {
  return element.split('').reverse().join('');
});

let reversed = result.map(word => {
  console.log(word.charAt(0));
  return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(result, reversed);
