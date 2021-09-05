import { swap } from './swap';

/**
 * @param {array} arr
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
export function getPivotIndex(arr, start = 0, end = arr.length - 1) {
	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}

	swap(arr, start, swapIndex);

	return swapIndex;
}
