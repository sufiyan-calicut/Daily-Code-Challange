let sentence = 'he studying at brototype';

function convert(str) {
  let arr = str.split(' ');
  for (let element of arr) {
    let nev = element.replace(
      element.charAt(0),
      element.charAt(0).toUpperCase()
    );
    let index = arr.indexOf(element);
    arr[index] = nev;
  }

  return arr.join(' ');
}

console.log(convert(sentence));
