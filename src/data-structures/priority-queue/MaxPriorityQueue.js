class Node {
	constructor(val, priority) {
		this.value = val;
		this.priority = priority;
	}
}

export class MaxPriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		const newNode = new Node(val, priority);

		this.values.push(newNode);
		this.bubbleUp();
	}

	dequeue() {
		const max = this.values[0];
		const end = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = end;
			this.bubbleDown();
		}

		return max;
	}

	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			const parent = this.values[parentIndex];

			// ">=" to make it MinPQ
			if (element.priority <= parent.priority) break;

			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	bubbleDown() {
		let index = 0;
		const element = this.values[0];
		const { length } = this.values;

		while (true) {
			let leftChild, rightChild;
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;

			let swap = null;

			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];

				// "<" to make it MinPQ
				if (leftChild.priority > element.priority) {
					swap = leftChildIndex;
				}
			}

			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];

				// "<" to make it MinPQ
				if (
					(swap === null && rightChild.priority > element.priority) ||
					(swap !== null && rightChild.priority > leftChild.priority)
				) {
					swap = rightChildIndex;
				}
			}

			if (swap === null) break;

			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
	}
}
