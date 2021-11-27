class Node {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

export class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		var newNode = new Node(val);

		if (this.root === null) {
			this.root = newNode;

			return this;
		}

		let current = this.root;

		while (true) {
			if (current.value === val) return undefined;
			if (val < current.value) {
				if (current.left === null) {
					current.left = newNode;

					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;

					return this;
				}
				current = current.right;
			}
		}
	}
}
