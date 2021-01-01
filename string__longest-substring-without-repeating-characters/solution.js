/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (!s) return 0;

  // set initial window
  let lPointer = 0,
    rPointer = 0;
  const lookup = new Set();
  let longest = 0;

  /*
   * Logic
   * -----
   *
   *  1. Maintain a set
   *  2. increase the right pointer when there is a no duplicate character
   *  3. if duplicate encountered, ++ the left pointer. and delete duplicate
   *     entry from set
   */

  while (rPointer < s.length) {
    // check if s[rPointer] is available in lookup table
    if (lookup.has(s[rPointer])) {
      lookup.delete(s[lPointer]);
      lPointer++;
    } else {
      // all clear. ++ to the right. add char to set and increase the
      // total count
      lookup.add(s[rPointer]);
      longest = Math.max(longest, lookup.size);
      rPointer++;
    }
  }

  return longest;
};

console.log(lengthOfLongestSubstring("abcde"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("pwwkew"));
