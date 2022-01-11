import { containsDuplicate } from './solution';

describe('containsDuplicate', () => {
	it('should return true if any value appears at least twice in the array, and return false if every element is distinct', () => {
		expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
		expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
		expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
	});
});
