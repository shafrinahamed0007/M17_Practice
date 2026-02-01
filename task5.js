/**
 * Write a function called odd_even() which takes an integer value and tell whether this value is even or odd. If even return EVEN. if odd return ODD
 */


function odd_even(number){
    if(number%2==0){
        return "EVEN";
    }else{
        return "ODD";
    }

}

const result = odd_even(26);
console.log(result);