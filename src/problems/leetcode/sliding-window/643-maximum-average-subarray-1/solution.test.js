import { findMaxAverage } from './solution';

describe('findMaxAverage', () => {
	it('should return the maximum number of consecutive 1`s in the array if you can flip at most k 0`s', () => {
		expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75);
		expect(findMaxAverage([5], 1)).toEqual(5);
	});
});
