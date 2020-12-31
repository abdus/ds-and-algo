/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const len = nums.length;
  let left = 0,
    right = len - 1;
  let hasTargetFound = false;

  while (left <= right) {
    if (nums[left] !== target) {
      left++;
    }

    if (nums[right] !== target) {
      right--;
    }

    if (nums[left] === nums[right] && nums[right] === target) {
      return [left, right];
    }
  }

  return [-1, -1];
};

console.log(searchRange([1, 2, 3, 3, 3, 3, 3, 3, 4, 6], 3));
