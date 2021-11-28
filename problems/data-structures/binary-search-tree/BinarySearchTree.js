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

	contains(val) {
		if (this.root === null) return false;

		let current = this.root;

		while (current) {
			if (val < current.value) {
				current = current.left;
			} else if (val > current.value) {
				current = current.right;
			} else {
				return true;
			}
		}

		return false;
	}
	// breadth first search
	bfs() {
		let node = this.root;
		const data = [];
		const queue = [];

		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.value);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		return data;
	}
	// depth first search (pre-order, starts from root to left)
	dfsPreOrder() {
		const data = [];

		function traverse(node) {
			data.push(node.value);

			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(this.root);

		return data;
	}
}
