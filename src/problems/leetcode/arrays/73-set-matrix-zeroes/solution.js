/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
export function setZeroes(matrix) {
	const current = [];

	// find zeros
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				current.push([i, j]);
			}
		}
	}

	// update row and col
	for (let i = 0; i < current.length; i++) {
		const [x, y] = current[i];
		// row
		for (let j = 0; j < matrix[i].length; j++) {
			matrix[x][j] = 0;
		}
		// col
		for (let j = 0; j < matrix.length; j++) {
			matrix[j][y] = 0;
		}
	}

	return matrix;
}
