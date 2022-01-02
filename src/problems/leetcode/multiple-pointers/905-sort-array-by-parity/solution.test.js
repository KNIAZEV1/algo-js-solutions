import { sortArrayByParity, sortArrayByParity2 } from './solution';

describe('findMaxConsecutiveOnes', () => {
	it('should return the maximum number of consecutive 1s in the array', () => {
		expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
		expect(sortArrayByParity2([3, 1, 2, 4])).toEqual([4, 2, 3, 1]);
	});
});
