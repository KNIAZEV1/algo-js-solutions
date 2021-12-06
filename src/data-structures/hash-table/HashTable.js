export class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	hash(key) {
		let total = 0;
		const RANDOM_NUM = 31;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			const char = key[i];
			const value = char.charCodeAt(0) - 96;

			total = (total * RANDOM_NUM + value) % this.keyMap.length;
		}

		return total;
	}

	set(key, val) {
		const index = this.hash(key);

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}

		this.keyMap[index].push([key, val]);
	}

	get(key) {
		const index = this.hash(key);

		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i];
				}
			}
		}

		return undefined;
	}

	keys() {
		let keysArr = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keysArr.includes(this.keyMap[i][j][0])) {
						keysArr.push(this.keyMap[i][j][0]);
					}
				}
			}
		}

		return keysArr;
	}

	values() {
		let valuesArr = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!valuesArr.includes(this.keyMap[i][j][1])) {
						valuesArr.push(this.keyMap[i][j][1]);
					}
				}
			}
		}

		return valuesArr;
	}
}
