class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	shift() {
		if (!this.head) return undefined;

		const currentHead = this.head;
		const newHead = currentHead.next;

		this.head = newHead;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}

		return currentHead;
	}

	unshift(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			const currentHead = this.head;

			newNode.next = currentHead;
			this.head = newNode;
		}

		this.length++;

		return this;
	}

	get(idx) {
		if (idx < 0 || idx >= this.length) return undefined;

		let current = this.head;
		let count = 0;

		while (count !== idx) {
			current = current.next;
			count++;
		}

		return current;
	}

	set(idx, val) {
		let foundNode = this.get(idx);

		if (foundNode) {
			foundNode.val = val;

			return true;
		}

		return false;
	}
}
