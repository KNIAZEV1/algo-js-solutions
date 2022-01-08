/**
 * @param {number[]} nums
 * @return {number[]}
 */
// using Set, time: O(n), space: O(n)
export function findDuplicates(nums) {
	const result = [];
	const set = new Set();

	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) {
			result.push(nums[i]);
		} else {
			set.add(nums[i]);
		}
	}

	return result;
}

// time: O(n), space: O(1)
export function findDuplicates2(nums) {
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		const current = Math.abs(nums[i]);

		if (nums[current - 1] < 0) {
			result.push(current);
		} else {
			nums[current - 1] *= -1;
		}
	}

	return result;
}
