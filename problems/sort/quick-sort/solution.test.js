import { quickSort } from './solution';

describe('quickSort', () => {
	it('should return a sorted array', () => {
		expect(quickSort([4,1,6,3,5,-7,2])).toStrictEqual([-7,1,2,3,4,5,6]);
	});
});
