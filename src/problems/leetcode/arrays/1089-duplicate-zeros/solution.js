/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
export function duplicateZeros(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			arr[i] = arr.splice(i, 0, 0)
			arr.pop();
			i++; // or it'll be the next 0 and infinite loop
		}
	}
}
