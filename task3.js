/**
 * Write a function called make_avg() which will take an array of integers and the size of the array and return
 * the average of those values.
 */

function make_avg(numbers) {
  let sum = 0;
  for (number of numbers) {
    sum = number + sum;
  }
  let size = numbers.length;
  let average = sum / size;
  return average;
}

let arr = [2, 5, 6, 1, 7, 9];
let avr_arr = make_avg(arr);
console.log(avr_arr);
