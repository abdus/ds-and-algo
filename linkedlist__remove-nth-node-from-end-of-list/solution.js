/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = function (head, n) {
  // find the length of the list
  let length = 0;
  let currentNode = head;

  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }

  if (length <= 1) {
    return null;
  }

  const rmNextNode = length - n;
  let counter = 1; // initialize counter
  currentNode = head;

  // node to be removed: 0th (not possible as counter starts from 1)
  if (rmNextNode < 1) {
    return currentNode.next;
  }

  while (counter < length) {
    if (counter === rmNextNode) {
      const nodeToBeRemoved = currentNode.next;
      currentNode.next = nodeToBeRemoved.next;
    }

    counter++;
    currentNode = currentNode.next;
  }

  return head;
};

function toLinkedList(arr) {
  const dummyHead = new ListNode(0);
  let current = dummyHead;

  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return dummyHead.next;
}

console.log(removeNthFromEnd(toLinkedList([1, 2, 3, 4, 5]), 2));
console.log(removeNthFromEnd(toLinkedList([1, 2]), 2));
console.log(removeNthFromEnd(toLinkedList([1]), 1));
