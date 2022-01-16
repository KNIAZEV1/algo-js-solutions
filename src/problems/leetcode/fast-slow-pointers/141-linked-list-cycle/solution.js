/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// time: O(n), space: O(1)
export function hasCycle(head) {
	let slow = head;
	let fast = head;

	while (fast?.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (fast === slow) return true;
	}

	return false;
}

// using Hash Map, time: O(n), space: O(n)
function hasCycle2(head) {
	const seen = new Set();

	const traverse = (node) => {
		if (!node) return false;
		if (seen.has(node)) return true;

		seen.add(node);

		return traverse(node.next);
	};

	return traverse(head);
}

// adding property, time: O(n), space: O(n)
function hasCycle3(head) {
	const run = (node) => {
		if (!node) return false;
		if (node.seen) return true;

		node.seen = true;

		return run(node.next);
	};

	return run(head);
}
