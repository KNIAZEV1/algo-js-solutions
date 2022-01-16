/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export function detectCycle(head) {
	let slow = head;
	let fast = head;

	while (fast?.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (fast === slow) {
			slow = head;

			while (slow !== fast) {
				slow = slow.next;
				fast = fast.next;
			}

			return slow;
		}
	}

	return null;
}
