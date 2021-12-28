/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// time: O(n), space: O(1)
export function twoSum(nums, target) {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (map.has(target - nums[i])) {
			return [map.get(target - nums[i]), i];
		}

		map.set(nums[i], i);
	}

	return [];
}
