var plusOne = function (digits) {
  let digitsString = digits.join('');

  let input = BigInt(digitsString);
  let one = BigInt(1);

  let incremented = input + one;

  digitsString = incremented.toString();
  digits = digitsString.split('').map(Number);

  return digits;
};

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(digits));
