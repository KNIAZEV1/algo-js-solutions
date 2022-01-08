import { findDuplicates, findDuplicates2 } from './solution';

describe('findDuplicates', () => {
	it('should return repeated number in array', () => {
		expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
		expect(findDuplicates([1, 1, 2])).toEqual([1]);
		expect(findDuplicates([1])).toEqual([]);

		expect(findDuplicates2([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
		expect(findDuplicates2([1, 1, 2])).toEqual([1]);
		expect(findDuplicates2([1])).toEqual([]);
	});
});
