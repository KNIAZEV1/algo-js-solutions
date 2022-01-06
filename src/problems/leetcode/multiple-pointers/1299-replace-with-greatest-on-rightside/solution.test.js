import { replaceElements } from './solution';

describe('replaceElements', () => {
	it('should replace every element in array with the greatest element among the elements to its right, and replace the last element with -1.', () => {
		expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1]);
	});
});
