/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// one-pointer solution
export function deleteDuplicates(head) {
	if (!head || head.length === 0) return null;

	let curr = head;

	while (curr && curr.next) {
		if (curr.val === curr.next.val) {
			curr.next = curr.next.next;
		} else {
			curr = curr.next;
		}
	}

	return head;
}

// two-pointers solution
function deleteDuplicates2(head) {
	if (!head || head.length === 0) return null;

	let curr = head;
	let next = head.next;

	while (next) {
		if (curr.val === next.val) {
			curr.next = next.next;
		} else {
			curr = curr.next;
		}
		// move next forward, it moves along with curr
		next = next.next;
	}

	return head;
}
