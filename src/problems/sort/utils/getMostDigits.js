/**
 * @param {number} num
 * @return {number}
 */
function getDigitsCount(num) {
	if (num === 0) return 1;

	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * @param {array} numsList
 * @return {number}
 */
// returns the most number of digits from the list
export function getMostDigits(numsList) {
	let mostDigitsCount = 0;

	for (let num of numsList) {
		mostDigitsCount = Math.max(mostDigitsCount, getDigitsCount(num));
	}

	return mostDigitsCount;
}
