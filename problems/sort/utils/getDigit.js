/**
 * @param {number} num
 * @param {number} i
 * @return {number}
 */
// gets the digit by index from the right side
export function getDigitByIndex(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
