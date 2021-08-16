/**
 * @param {array} arr
 * @return {array | undefined}
 */

export function sumZero(arr) {
	if (arr.length === 0) return;

	let left = 0;
	let right = arr.length - 1;

	while (arr[left] < arr[right]) {
		if (arr[left] + arr[right] === 0) {
			return [arr[left], arr[right]];
		}
		if (arr[left] < arr[right]) {
			left++;
		} else {
			right--;
		}
	}
}
