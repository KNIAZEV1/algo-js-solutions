/**
 * @param {number[]} nums
 * @return {boolean}
 */
// time: O(n), space: O(n)
export function containsDuplicate(nums) {
	const set = new Set();

	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) return true;
		set.add(nums[i]);
	}

	return false;
}
