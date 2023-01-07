// const num = [1000, 500, 100, 50, 5, 1];
/*
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

1 = I, 2 = II, 3 = III, 
*/
// const r = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
// const d = [1000, 500, 100, 50, 10, 5, 1];

function toRom(n) {
  let num = n
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