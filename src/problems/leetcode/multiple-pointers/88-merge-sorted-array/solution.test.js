import { merge } from './solution';

describe('merge', () => {
	it('should return merged array sorted in non-decreasing order', () => {
		expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1,2,2,3,5,6]);
		expect(merge([1], 1, [], 0)).toEqual([1]);
		expect(merge([0], 0, [1], 1)).toEqual([1]);
	});
});
