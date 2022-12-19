"use strict"
/**
Given an integer x, return true if x is a 
palindrome, and false otherwise.
solve it without converting the integer to a string
*/

/**
 * @param {number} x
 * @return {boolean}
*/

// Solution with converting intiger to string

// var isPalindrome = function (x) {
//   let b = x.toString().split("").reverse().join("")
//   b = parseInt(b)
//   if (x === b) {
//     return true
//   } else {
//     return false
//   }
// }

/*
▶️ solution with out converting intiger

* let "flip" to 0. 

* let "temp" to "input int (function param)". 

* While temp is greater than 0:

a. Extract the last digit of temp and add it to flip. 
To extract the last digit, you can use the modulo operator (%) 
to get the remainder when temp is divided by 10. For example, 
if temp is 123, then temp % 10 will be 3.

b. Remove the last digit from temp by dividing it by 10 and 
flooring the result using the floor division operator (//). 
For example, if temp is 123, then temp // 10 will be 12.
Compare flip to the input integer. If they are equal, 
return true. Otherwise, return false.

*/
console.log('hello')

function isPalindrome(x) {
  let flip = 0
  let temp = x

  while (temp > 0) {
    flip = (flip * 10) + (temp % 10)
    temp = Math.floor(temp / 10)
  }
  return flip === x
}

let arr = [
  30323, 141441, 151551, 161661,
  40414, 50605, 60606, 70707,
  80808, 90909, 101010, 121221,
  131331, 171771, 181881, 191919,
  202020, 212121, 11011, 10101,
  20202, 21022, 31033, 41414,
  51015, 61026, 71007, 81008,
  91009, 111011, 121021, 131031,
  141041, 151051, 161061, 171071,
  181081, 191091, 201012, 211022]

for (i of arr) {
  console.log(isPalindrome(i))
}