/**
 * @param {array} arr
 * @return {array}
 */
// O(n^2)
export function bubbleSort(arr) {
	let swaps;

	for (let i = arr.length; i > 0; i--) {
		swaps = false;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];

				arr[j] = arr[j + 1];
				arr[j + 1] = temp;

				swaps = true
			}
		}
		if (!swaps) break
	}

	return arr;
}
