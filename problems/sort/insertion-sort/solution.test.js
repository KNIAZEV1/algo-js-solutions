import { insertionSort } from './solution';

describe('insertionSort', () => {
	it('should return a sorted array', () => {
		expect(insertionSort([4,1,6,3,5,-7,2])).toStrictEqual([-7,1,2,3,4,5,6]);
	});
});
