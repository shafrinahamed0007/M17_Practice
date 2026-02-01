/**
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of Only 0 and 1) as
 * parameter and count how many 0's are there in that string
 */

function count_zero(x) {
  const splts = x.split(",");

  let lnth = 0;

  for (i = 0; i < splts.length; i++) {
    let size = splts[i];
    if (size == 0) {
      lnth = lnth + size.length;
    }
  }

  return lnth;
}

let str = "1,0,0,1,0,1,0,0,0,1";

let count_str = count_zero(str);
console.log(count_str);
