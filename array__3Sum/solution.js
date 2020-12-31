/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums = bubbleSort(nums);
  const len = nums.length;
  const result = [];

  for (let i = 0; i < len; i++) {
    // here, we get the first digit of the triplet

    if (nums[i] > 0) {
      break;
      // break out of the loop when nums[i] > 0
      // reason: the array is sorted. so if nums[i] > 0, there's no way we
      // would have digits smaller than 0
    }

    if (nums[i] !== nums[i - 1]) {
      // we surely want to escape duplicates

      let left = i + 1,
        right = nums.length - 1,
        current = nums[i];

      // now move pointers toward each other
      while (left < right) {
        const sum = current + nums[left] + nums[right];

        // remember: op is on sorted array
        if (sum < 0) {
          // since the sum is less then 0, we need bigger numbers
          left++;
        } else if (sum > 0) {
          // since the sum is greater then 0, we need smaller numbers
          right--;
        } else {
          result.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;

          // jump all duplicates and place the left pointer to an unique index
          while (left < right && nums[left] === nums[left - 1]) left++;
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

function bubbleSort(arr) {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}
