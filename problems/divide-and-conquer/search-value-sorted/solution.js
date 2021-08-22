/**
 * @param {array} arr
 * @param {number} value
 * @return {number}
 */
//binary search O(log n)
export function search(arr, value) {
	if (arr.length === 0) return -1;

	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentValue = arr[middle];

		if (currentValue === value) {
			return middle;
		}

		if (currentValue < value) {
			min = middle + 1;
		} else {
			max = middle - 1;
		}
	}

	return -1;
}

/**
 * @param {array} arr
 * @param {number} value
 * @return {number}
 */
//linear search O(n)
function search2(arr, value) {
	if (arr.length === 0) return -1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}
	return -1;
}
