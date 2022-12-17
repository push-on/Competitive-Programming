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

var isPalindrome = function (x) {
  let b = x.toString().split("").reverse().join("")
  b = parseInt(b)
  if (x === b) {
    return true
  } else {
    return false
  }
}

/*
▶️ solution with out converting intiger

* Initialize a variable "reversed" to 0. 
This will be used to store the "reversed" version of the input integer.

* Initialize a variable "temp" to the "input int (function parameter)". 
This will be used to keep track of the original int as we "reverse" it.

* While temp is greater than 0:

a. Extract the last digit of temp and add it to reversed. 
To extract the last digit, you can use the modulo operator (%) 
to get the remainder when temp is divided by 10. For example, 
if temp is 123, then temp % 10 will be 3.

b. Remove the last digit from temp by dividing it by 10 and 
flooring the result using the floor division operator (//). 
For example, if temp is 123, then temp // 10 will be 12.
Compare reversed to the input integer. If they are equal, 
return true. Otherwise, return false.

*/

function isPalindrome(x) {
  let reversed = 0
  let temp = x

  while (temp > 0) {
    reversed = (reversed * 10) + (temp % 10)
    temp = temp // 10;
  }
  return reversed == x
}

