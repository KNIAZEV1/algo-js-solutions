import { spiralOrder } from './solution';

describe('spiralOrder', () => {
	it('should return all elements of the matrix in spiral order', () => {
		expect(
			spiralOrder([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			])
		).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
	});
});
