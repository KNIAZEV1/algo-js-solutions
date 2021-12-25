/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// time: O(m*n), space: O(1)
export function spiralOrder(matrix) {
	const result = [];

	while (matrix.length) {
		const curr = matrix.shift();
		result.push(...curr);

		for (let subArr of matrix) {
			const value = subArr.pop();

			if (value) {
				result.push(value);
				subArr.reverse();
			}
		}
		matrix.reverse();
	}

	return result;
}
