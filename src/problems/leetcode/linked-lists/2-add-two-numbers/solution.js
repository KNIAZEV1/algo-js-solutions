/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// recursion, time and space: O(m+n)
export function addTwoNumbers(l1, l2) {
	return add(l1, l2, 0);

	function add(l1, l2, carry) {
		const value1 = l1?.val || 0;
		const value2 = l2?.val || 0;
		const sum = value1 + value2 + carry;
		const newCarry = Math.floor(sum / 10);
		const val = sum % 10;

		return l1 || l2 || carry
			? { val, next: add(l1?.next, l2?.next, newCarry) }
			: null;
	}
}
