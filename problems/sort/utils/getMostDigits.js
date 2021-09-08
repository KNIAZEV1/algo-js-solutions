import { getDigitsCount } from './getDigitsCount';

/**
 * @param {array} numsList
 * @return {number}
 */
// returns the most number of digits from the list
export function getMostDigits(numsList) {
	let mostDigitsCount = 0;

	for (num of numsList) {
		mostDigitsCount = Math.max(mostDigitsCount, getDigitsCount(num));
	}

	return mostDigitsCount;
}
