import { findDuplicate, findDuplicate2 } from './solution';

describe('findDuplicate', () => {
	it('should return repeated number in array', () => {
		expect(findDuplicate([1, 3, 4, 2, 2])).toEqual(2);
		expect(findDuplicate([3, 1, 3, 4, 2])).toEqual(3);
		expect(findDuplicate([2, 2, 2, 2])).toEqual(2);

		expect(findDuplicate2([1, 3, 4, 2, 2])).toEqual(2);
		expect(findDuplicate2([3, 1, 3, 4, 2])).toEqual(3);
		expect(findDuplicate2([2, 2, 2, 2])).toEqual(2);
	});
});
