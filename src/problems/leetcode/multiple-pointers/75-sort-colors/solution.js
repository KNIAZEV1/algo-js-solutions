/**
 * @param {number[]} nums
 * @return {number[]}
 */
// The idea of solution is to move curr pointer along the array, if nums[curr] = 0 - swap it with nums[p0], if nums[curr] = 2 - swap it with nums[p2]. Time: O(n), space: O(1)
export function sortColors(nums) {
	const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

	let left = 0;
	let right = nums.length - 1;
	let current = left;

	while (current <= right) {
		if (nums[current] === 0) {
			swap(left, current);
			left++;
			current++;
		} else if (nums[current] === 2) {
			swap(right, current);
			right--;
		} else {
			current++;
		}
	}

	return nums;
}
