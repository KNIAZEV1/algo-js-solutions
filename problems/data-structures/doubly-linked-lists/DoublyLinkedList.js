class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
		this.prev = null;
	}
}

export class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	pop() {
		if (this.length === 0) return undefined;

		const poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			const newTail = poppedNode.prev;

			this.tail = newTail;
			newTail.next = null;
			poppedNode.prev = null;
		}

		this.length--;

		return poppedNode;
	}

	shift() {
		if (this.length === 0) return undefined;

		const oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			const newHead = oldHead.next;

			this.head = newHead;
			newHead.prev = null;
			oldHead.next = null;
		}

		this.length--;

		return oldHead;
	}

	unshift(val) {
		const newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;

		return this;
	}

	get(idx) {
		if (idx < 0 || idx >= this.length) return undefined;

		let count, current;

		if (idx <= this.length / 2) {
			count = 0;
			current = this.head;

			while (count !== idx) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;

			while (count !== idx) {
				current = current.prev;
				count--;
			}
		}

		return current;
	}

	set(idx, val) {
		const foundNode = this.get(idx);

		if (foundNode) {
			foundNode.value = val;

			return true;
		}

		return false;
	}

	insert(idx, val) {
		if (idx < 0 || idx > this.length) return false;
		if (idx === 0) return !!this.unshift(val);
		if (idx === this.length) return !!this.push(val);

		const newNode = new Node(val);
		let prevNode = this.get(idx - 1);
		let nextNode = prevNode.next;

		prevNode.next = newNode;
		newNode.prev = prevNode;
		newNode.next = nextNode;
		nextNode.prev = newNode;
		this.length++;

		return true;
	}

	remove(idx) {
		if (idx < 0 || idx >= this.length) return undefined;
		if (idx === this.length - 1) return this.pop();
		if (idx === 0) return this.shift();

		const removedNode = this.get(idx);
		const prevNode = removedNode.prev
		const nextNode = removedNode.next

		prevNode.next = nextNode;
		nextNode.prev = prevNode;
		removedNode.next = null;
		removedNode.prev = null;
		this.length--;

		return removedNode;
	}
}
