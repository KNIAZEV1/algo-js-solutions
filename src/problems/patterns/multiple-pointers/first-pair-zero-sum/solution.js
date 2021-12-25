/**
 * @param {array} arr
 * @return {array | undefined}
 */

export function sumZero(arr) {
	if (arr.length === 0) return;

	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right]

		if (sum === 0) {
			return [arr[left], arr[right]];
		}
		if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}
