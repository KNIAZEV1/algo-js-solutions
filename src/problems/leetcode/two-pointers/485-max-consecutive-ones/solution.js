/**
 * @param {number[]} nums
 * @return {number}
 */
// time: O(n), space: O(1)
export function findMaxConsecutiveOnes(nums) {
	let current = 0;
	let max = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			current++;
		} else {
			max = Math.max(max, current);
			current = 0;
		}
	}

	return Math.max(max, current);
}
