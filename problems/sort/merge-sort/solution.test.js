import { mergeSort } from './solution';

describe('mergeSort', () => {
	it('should return a sorted array', () => {
		expect(mergeSort([4,1,6,3,5,-7,2])).toStrictEqual([-7,1,2,3,4,5,6]);
	});
});
