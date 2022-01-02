/**
 * @param {number[]} nums
 * @return {number[]}
 */
// time: O(n), space: O(1)
// first pointer (fast) - current i, second (slow) - currNonZero
export function moveZeroes(nums) {
	let currNonZero = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[currNonZero] = nums[i];
			currNonZero++;
		}
	}
	// fill remaining nums.length with 0's
	for (let i = currNonZero; i < nums.length; i++) {
		nums[i] = 0;
	}

	return nums;
}
