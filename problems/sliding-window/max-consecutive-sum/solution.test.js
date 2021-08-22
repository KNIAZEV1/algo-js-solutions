import { maxSubarraySum } from './solution';

describe('maxSubarraySum', () => {
	it('should return null', () => {
		expect(maxSubarraySum([], 4)).toBe(null);
		expect(maxSubarraySum([4], 4)).toEqual(null);
	});
	it('should return valid number', () => {
		expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10);
		expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toEqual(17);
		expect(maxSubarraySum([4, 2, 1, 6], 1)).toEqual(6);
		expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toEqual(13);
	});
});
