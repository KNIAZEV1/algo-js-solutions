/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// time: O(n), space: O(1)
export function findAnagrams(s, p) {
	const result = [];
	const neededChars = {};

	for (let char of p) {
		if (char in neededChars) {
			neededChars[char]++;
		} else neededChars[char] = 1;
	}

	let left = 0;
	let right = 0;
	let count = p.length;

	while (right < s.length) {
		if (neededChars[s[right]] > 0) count--;

		neededChars[s[right]]--;
		right++;

		if (count === 0) result.push(left);

		if (right - left === p.length) {
			if (neededChars[s[left]] >= 0) count++;

			neededChars[s[left]]++;
			left++;
		}
	}

	return result;
}
