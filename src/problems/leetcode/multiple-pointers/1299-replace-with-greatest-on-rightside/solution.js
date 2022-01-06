/**
 * @param {number[]} arr
 * @return {number[]}
 */
// time: O(n), space: O(1)
export function replaceElements(arr) {
	const result = [];
	result[arr.length - 1] = -1;

	for (let i = arr.length - 1; i > 0; i -= 1) {
		result[i - 1] = Math.max(arr[i], result[i]);
	}

	return result;
}
