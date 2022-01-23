/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// time: O(n), space: O(n)
export function reorderList(head) {
	if (!head) return;

	let cur = head;

	let middle = findMiddleNode(head);
	let reversed = reverseList(middle.next);

	while (reversed) {
		const temp = cur.next;
		cur.next = reversed;
		reversed = reversed.next;
		cur.next.next = temp;
		cur = temp;
	}

	middle.next = null;
}

function findMiddleNode(head) {
	if (!head) return;

	let middle = head;

	while (head && head.next) {
		head = head.next.next;
		middle = middle.next;
	}

	return middle;
}

function reverseList(head) {
	if (!head) return;

	let prev = null;

	while (head) {
		const temp = head.next;
		head.next = prev;
		prev = head;
		head = temp;
	}

	return prev;
}
