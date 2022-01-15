import { maxScore } from './solution';

describe('maxScore', () => {
	it('should return the maximum score', () => {
		expect(maxScore([1, 2, 3, 4, 5, 6, 1], 3)).toEqual(12);
		expect(maxScore([2, 2, 2], 2)).toEqual(4);
		expect(maxScore([9, 7, 7, 9, 7, 7, 9], 7)).toEqual(55);
	});
});
