/**
 * @param {number[]} nums
 * @return {number}
 */
// time: O(n), space: O(1)
export function findMaxConsecutiveOnes(nums) {
	let max = 0;
	let flipped = 0;
	let unflipped = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			flipped++;
			unflipped++;
		} else {
			max = Math.max(max, flipped);
			flipped = unflipped + 1;
			unflipped = 0;
		}
	}

	return Math.max(max, flipped);
}
