import { isAnagram } from './solution';

describe('Is valid anagram', () => {
	it('should be VALID anagram', () => {
		expect(isAnagram('', '')).toBe(true);
		expect(isAnagram('anagram', 'nagaram')).toBe(true);
	});
	it('should be INVALID anagram', () => {
		expect(isAnagram('aaz', 'zza')).toBe(false);
		expect(isAnagram('awesome', 'awesom')).toBe(false);
	});
});
