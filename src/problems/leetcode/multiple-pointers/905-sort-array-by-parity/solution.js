/**
 * @param {number[]} nums
 * @return {number[]}
 */
// time: O(n), space: O(1), not memory effecient solution
export function sortArrayByParity(nums) {
	const even = [];
	const odd = [];

	for (let i = 0; i < nums.length; i++) {
		// check is odd
		if (nums[i] & 1) {
			odd.push(nums[i]);
		} else {
			even.push(nums[i]);
		}
	}

	return [...even, ...odd];
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// time: O(n), space: O(1), memory effecient solution
export function sortArrayByParity2(nums) {
	return nums.sort(a => a & 1 ? 1 : -1);
}
