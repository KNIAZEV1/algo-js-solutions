import { validMountainArray } from './solution';

describe('validMountainArray', () => {
	it('should return true', () => {
		expect(validMountainArray([0, 3, 2, 1])).toBe(true);
	});
	it('should return false', () => {
		expect(validMountainArray([2, 1])).toBe(false);
		expect(validMountainArray([3, 5, 5])).toBe(false);
		expect(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(false);
	});
});
