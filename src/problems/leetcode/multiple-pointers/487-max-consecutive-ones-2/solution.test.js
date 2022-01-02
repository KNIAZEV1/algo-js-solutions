import { findMaxConsecutiveOnes } from './solution';

describe('findMaxConsecutiveOnes', () => {
	it('should return the maximum number of consecutive 1s in the array', () => {
		expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0])).toEqual(4);
		expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toEqual(4);
	});
});
