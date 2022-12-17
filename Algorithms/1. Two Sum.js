/**
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let arr = []
  let a = 0
  let b = 0
  let i = 0
  let j = 0
  outer_loop: while (i < nums.length) {
    while (j < nums.length - 1) {
      a = nums[i]
      b = nums[j]
      if (a + b == target && i != j) {
        arr.push(i)
        arr.push(j)
        break outer_loop
      }
      j++
    }
    j = 0
    i++
  }
  return arr
}