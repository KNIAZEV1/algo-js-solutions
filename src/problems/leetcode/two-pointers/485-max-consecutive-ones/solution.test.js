import { findMaxConsecutiveOnes } from './solution';

describe('findMaxConsecutiveOnes', () => {
	it('should return the maximum number of consecutive 1s in the array', () => {
		expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3);
		expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toEqual(2);
		expect(findMaxConsecutiveOnes([0, 0, 0, 1, 0, 0])).toEqual(1);
	});
});
