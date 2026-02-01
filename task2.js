/**
 * Take a number if the number is odd multiply it by 2 and return result. If the number divide it by two and return the result
 */

function isOdd(x) {
  if (x % 2 == 1) {
    return x * 2;
  } else {
    return x / 2;
  }
}

const number = 11;
const checkNumber = isOdd(number);
console.log(checkNumber);
