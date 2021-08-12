/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */

export function isAnagram(first, second) {
	if (first.length !== second.length) return false;

	let counter = {};

	for (let i = 0; i < first.length; i++) {
		const letter = first[i];
		counter[letter] ? (counter[letter] += 1) : (counter[letter] = 1);
	}

	for (let i = 0; i < second.length; i++) {
		const letter = second[i];

		if (!counter[letter]) {
			return false;
		}

		counter[letter] -= 1;
	}

	return true;
}
