/**
 * @param {number[]} nums
 * @return {number[]}
 */
// time: O(n), space: O(1)
export function findDisappearedNumbers(nums) {
	const result = [];
	const set = new Set(nums);

	for (let i = 1; i <= nums.length; i++) {
		if (!set.has(i)) {
			result.push(i);
		}
	}

	return result;
}
