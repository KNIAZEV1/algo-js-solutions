/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

export function isAnagram(s1, s2) {
	if (s1.length !== s2.length) return false;

	let counter1 = {};
	let counter2 = {};

	for (let val of s1.split('')) {
		counter1[val] = (counter1[val] || 0) + 1;
	}
	for (let val of s2.split('')) {
		counter2[val] = (counter2[val] || 0) + 1;
	}
	for (let key in counter1) {
		if (!(key in counter2)) return false;
		if (counter2[key] !== counter1[key]) return false;
	}

	return true;
}
