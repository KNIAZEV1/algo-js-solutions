import { findMaxAverage } from './solution';

describe('findMaxAverage', () => {
	it('should return the maximum average value of contiguous subarray whose length is equal to k', () => {
		expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75);
		expect(findMaxAverage([5], 1)).toEqual(5);
	});
});
