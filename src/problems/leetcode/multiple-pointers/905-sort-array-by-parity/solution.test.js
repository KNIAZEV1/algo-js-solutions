import { sortArrayByParity, sortArrayByParity2 } from './solution';

describe('findMaxConsecutiveOnes', () => {
	it('should return a valid array as per conditions', () => {
		expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
		expect(sortArrayByParity2([3, 1, 2, 4])).toEqual([4, 2, 3, 1]);
	});
});
