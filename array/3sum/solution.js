/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums = bubbleSort(num);
};

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
