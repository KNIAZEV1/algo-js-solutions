/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// time: O(n), space: O(n)
export function containsNearbyDuplicate(nums, k) {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const duplicate = map.get(nums[i]);

		if (duplicate !== undefined && Math.abs(i - duplicate) <= k) {
			return true;
		}

		map.set(nums[i], i);
	}

	return false;
}
