import { findDisappearedNumbers } from './solution';

describe('findDisappearedNumbers', () => {
	it('should return return an array of all the integers in the range [1, n] that do not appear in nums', () => {
		expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
		expect(findDisappearedNumbers([1, 1, 1, 1, 1])).toEqual([2, 3, 4, 5]);
		expect(findDisappearedNumbers([1, 1])).toEqual([2]);
		expect(findDisappearedNumbers([31, 11, 4, 5, 12, 54])).toEqual([1,2,3,6]);
	});
});
