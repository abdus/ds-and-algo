//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const big = l1.length > l2.length ? l1 : l2;
  const result = new ListNode(0);
  let current = result;
  let carry = 0;

  let i = 0;
  while (i < big.length || carry > 0) {
    const x = l1[i] || 0;
    const y = l2[i] || 0;

    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    current.next = new ListNode(sum);
    current = current.next;

    i++;
  }

  return result.next;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
