import { getDigitByIndex } from '../utils';
import { getMostDigits } from '../utils';

/**
 * @param {array} arr
 * @return {array}
 */
// time O(nk); space O(n+k), n - number of integers, k - length of numbers
export function radixSort(arr) {
	let maxDigitCount = getMostDigits(arr);

	for (let i = 0; i < maxDigitCount; i++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);

		for (let j = 0; j < arr.length; j++) {
			let digit = getDigitByIndex(arr[j], i);

			digitBuckets[digit].push(arr[j]);
		}
		arr = [].concat(...digitBuckets);
	}

	return arr;
}
