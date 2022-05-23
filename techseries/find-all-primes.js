/**
 * Given a positive integer n, find all primes less than n.

Here's an example and some starter code:

def find_primes(n):
  # Fill this in.

print(find_primes(14))
# [2, 3, 5, 7, 11, 13]
 */

var findPrimes = function (number) {
  let result = [];
  if (number <= 1) {
    return result;
  }

  for (let x = 2; x <= number; x++) {
    if (isPrime(x)) {
      result.push(x);
    }
  }
  return result;
};

var isPrime = function (n) {
  if (n <= 1) return false;

  for (let x = 2; x < n; x++) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
};
console.log(findPrimes(14));
