/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// time: O(n), space: O(1), works only with sorted arrays!
export function twoSum(nums, target) {
	let leftIdx = 0;
	let rightIdx = nums.length - 1;

	while (leftIdx < rightIdx) {
		const sum = nums[leftIdx] + nums[rightIdx];

		if (sum === target) {
			return [leftIdx, rightIdx];
		}

		if (sum > target) {
			rightIdx--;
		} else {
			leftIdx++;
		}
	}

	return [];
}

// using HashMap, time: O(n), space: O(n)
export function twoSum2(nums, target) {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		// j + nums[i] = target
		const j = target - nums[i];

		if (map.has(j)) {
			return [map.get(j), i];
		}

		map.set(nums[i], i);
	}

	return [];
}
