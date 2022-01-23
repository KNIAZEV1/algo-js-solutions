/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// time: O(m+n), space O(1)
function getIntersectionNode(headA, headB) {
	if (!headA || !headB) return null;

	let a = headA;
	let b = headB;

	while (a !== b) {
		a = a.next;
		b = b.next;

		if (!a && !b) return a;
		if (!a) a = headB;
		if (!b) b = headA;
	}

	return a;
}

// using Set, time: O(m+n), space O(n)
function getIntersectionNode(headA, headB) {
	const set = new Set();

	while (headA) {
		set.add(headA);
		headA = headA.next;
	}

	while (headB) {
		if (set.has(headB)) return headB;
		headB = headB.next;
	}

	return null;
}
