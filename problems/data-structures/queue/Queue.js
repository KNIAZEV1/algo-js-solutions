class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

export class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	// push
	enqueue(val) {
		const newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return ++this.size;
	}
	// pop
	dequeue() {
		if (this.size === 0) return null;

		let temp = this.first;

		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;

		return temp.value;
	}
}
