/**
 * @param {number[]} arr
 * @return {number[]}
 */
// time: O(n), space: O(1)
export function replaceElements(arr) {
	const result = [];
	result[arr.length - 1] = -1;

	for (let i = arr.length - 1; i > 0; i--) {
		result[i - 1] = Math.max(arr[i], result[i]);
	}

	return result;
}

// in-place solution, time: O(n), space: O(1)
export function replaceElements2(arr) {
	let max = arr[arr.length - 1];
	arr[arr.length - 1] = -1;

	for (let i = arr.length - 2; i >= 0; i--) {
		let temp = arr[i];

		arr[i] = max;
		max = Math.max(max, temp);
	}

	return arr;
}
