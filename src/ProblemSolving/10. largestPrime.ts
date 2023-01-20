const x = 600851475143;
let y = x;
const primes: number[] = [];

for (let i = 2; i <= y; i++) {
  if (y % i === 0) {
    primes.push(i);
    y /= i;
  }
}
const LargestPrime = Math.max.apply(null, primes);

console.log(`List of Primes ${primes}`);
console.log(`largest Prime: ${LargestPrime}`);