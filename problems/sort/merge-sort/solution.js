import { merge } from '../utils';
/**
 * @param {array} arr
 * @return {array}
 */

// O(nlogn): O(logn) decompositions and O(n) comparisons per decomposition
export function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const rigth = mergeSort(arr.slice(mid));

	return merge(left, rigth);
}
