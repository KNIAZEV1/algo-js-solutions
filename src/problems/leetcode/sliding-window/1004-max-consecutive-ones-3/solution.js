/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// time: O(n), space: O(1)
export function longestOnes(nums, k) {
	let start = 0;
	let end = 0;

	while (end < nums.length) {
		if (nums[end] === 0) k--;
		if (k < 0) {
			if (nums[start] === 0) k++;
			start++;
		}
		end++;
	}

	return end - start;
}
