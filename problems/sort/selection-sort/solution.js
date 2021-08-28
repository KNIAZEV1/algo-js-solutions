import { swap } from '../utils/swap';

/**
 * @param {array} arr
 * @return {array}
 */
// O(n^2)
export function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}

		if (i !== min) swap(arr, i, min);
	}

	return arr;
}
