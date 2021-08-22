/**
 * @param {array} arr
 * @return {number | null}
 */

export function maxSubarraySum(arr, num) {
	if (arr.length < num) return null;

	let maxSum = 0;
	let currentSum = 0;

	for (let i = 0; i < num; i++) {
		currentSum += arr[i];
	}

	maxSum = currentSum;

	for (let i = num; i < arr.length; i++) {
		currentSum = currentSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, currentSum);
	}

	return maxSum;
}
