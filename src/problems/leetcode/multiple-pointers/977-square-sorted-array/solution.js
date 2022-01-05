/**
 * @param {number[]} nums
 * @return {number[]}
 */
// time: O(n), space: O(n)
export function sortedSquares(nums) {
	const result = [];
	let left = 0;
	let right = nums.length - 1;
	let nextInsertionIdx = right; // to keep track where our next insert position will be in the results array

	while (left <= right) {
		const leftPow = nums[left] * nums[left];
		const rightPow = nums[right] * nums[right];

		if (leftPow > rightPow) {
			result[nextInsertionIdx] = leftPow;
			nextInsertionIdx--;
			left++;
		} else {
			result[nextInsertionIdx] = rightPow;
			nextInsertionIdx--;
			right--;
		}
	}

	return result;
}

//time: O(nlogn, because we use sort), space: O(1)
export function sortedSquares2(nums) {
	return nums.map((n) => n * n).sort((a, b) => a - b);
}
