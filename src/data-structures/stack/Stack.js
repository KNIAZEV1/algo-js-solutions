class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

export class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}

		return ++this.size;
	}

	pop() {
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
