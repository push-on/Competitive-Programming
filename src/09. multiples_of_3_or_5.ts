const sum: number[] = [];

export const result = () => {
  for (let i = 1; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum.push(i);
    }
  }
  return sum;
};

console.log(result());


