/**
 * @param {array} arr
 * @return {number}
 */

export function countUniqueValues(arr) {
	if (arr.length === 0) return 0;

	const unique = new Set(arr)
	
	return unique.size
}
