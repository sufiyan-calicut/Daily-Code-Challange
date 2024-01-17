let str = 'Brototype';

function Reverse(str, start, end) {
  if (start < end) {
    let s = str.split('');
    [s[start], s[end]] = [s[end], s[start]];
    console.log(s);
    start++;
    end--;
    str = s.join('');
    Reverse(str, start, end);
  }
  return str;
}

let length = str.length - 1;
let result = Reverse(str, 0, length);
console.log(result);
