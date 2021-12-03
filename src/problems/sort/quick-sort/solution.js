import { getPivotIndex } from '../utils';
/**
 * @param {array} arr
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

// O(nlogn): O(logn) decompositions and O(n) comparisons per decomposition
export function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = getPivotIndex(arr, left, right);

		quickSort(arr, left, pivotIndex - 1); // left
		quickSort(arr, pivotIndex + 1, right); // right
	}

	return arr;
}
