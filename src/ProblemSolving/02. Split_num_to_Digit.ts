const num = 123456789;
const sdigits = num.toString();
const digits: number[] = [];

for (const entry of sdigits) {
  digits.push(+entry);
}
console.log(digits);
