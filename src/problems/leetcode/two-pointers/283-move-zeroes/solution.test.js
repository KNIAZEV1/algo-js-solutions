import { moveZeroes } from './solution';

describe('moveZeroes', () => {
	it('should return move all 0s to the end of it while maintaining the relative order of the non-zero elements', () => {
		expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
		expect(moveZeroes([0, 0, 12, 0, 3, 2, 0, 1])).toEqual([12, 3, 2, 1, 0, 0, 0, 0]);
	});
});
