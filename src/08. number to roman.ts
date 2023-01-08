function toRom(n: number) {
  let num = n;
  const r = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const d = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let rN = '';
  for (let i = 0; i < d.length; i++) {
    while (d[i] <= num) {
      rN += r[i];
      num -= d[i];
    }
  }
  return rN;
}
const finalResult = toRom(1234);
console.log(finalResult);

