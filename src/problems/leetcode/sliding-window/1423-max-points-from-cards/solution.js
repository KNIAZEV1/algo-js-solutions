/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
// time: O(n), space: O(1)
export function maxScore(cardPoints, k) {
	let left = k - 1;
	let right = cardPoints.length - 1;
	let currentSum = 0;

	for (let i = 0; i < k; i++) {
		currentSum += cardPoints[i];
	}

	let maxSum = currentSum;

	for (let i = 0; i < k; i++) {
		currentSum += cardPoints[right] - cardPoints[left];
		maxSum = Math.max(maxSum, currentSum);
		right--;
		left--;
	}

	return maxSum;
}
