/**
 * @param {string} str
 * @param {string} value
 * @return {number}
 */
//linear search O(n^2)
export function countAppearsTime(str, value) {
	let count = 0;

	if (str.length < value.length || value.length === 0) return count;

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < value.length; j++) {
			if (str[i + j] !== value[j]) break;
			if (j === value.length - 1) count++;
		}
	}

	return count;
}
