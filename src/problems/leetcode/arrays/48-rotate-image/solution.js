/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// time: O(n^2), space: O(1)
export function rotate(matrix) {
	matrix.reverse();

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < i; j++) {
			let temp = matrix[i][j];

			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	return matrix;
}
