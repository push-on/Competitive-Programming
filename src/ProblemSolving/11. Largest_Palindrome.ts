let largest = 0;

for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    const product = i * j;
    if (product.toString() === product.toString().split("").reverse().join("")) {
      largest = Math.max(largest, product);
    }
  }
}

console.log(largest);