export class MaxBinaryHeap {
	constructor(list) {
		this.values = list && list.length > 0 ? list : [];
	}

	insert(val) {
		this.values.push(val);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			const parent = this.values[parentIndex];

			if (element <= parent) break;

			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}
}
