/**
 * @param {array} arr
 * @return {number}
 */

// a soultion using Multiple pointers pattern
export function countUniqueValues(arr) {
	if (arr.length === 0) return 0;

	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}

	return i + 1;
}

// a short-hand solution using Set
function countUniqueValues2(arr) {
	if (arr.length === 0) return 0;

	const unique = new Set(arr);

	return unique.size;
}
