/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum === target) return [i, j];
    }
  }
};

// complexity:
//    time: O(n^2)
//    space: constant

// a better approach (from leetcode solutions)
// time can be reduced to O(n) by trading for
// some extra space using a hashtable

const twoSum__hashTable = (nums, target) => {
  const lookup = {};

  for (let i = 0; i < nums.length; i++) {
    lookup[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const a = target - nums[i];

    if (lookup[a] && lookup[a] !== i) {
      return [i, lookup[a]];
    }
  }
};

console.log(twoSum__hashTable([2, 7, 11, 15], 9));
console.log(twoSum__hashTable([3, 2, 4], 6));
console.log(twoSum__hashTable([3, 3], 6));
console.log(twoSum__hashTable([1, 3, 4, 2], 6));
