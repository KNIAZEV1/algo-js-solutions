import { findAnagrams } from './solution';

describe('findAnagrams', () => {
	it('should return an array of all the start indices of p`s anagrams in s', () => {
		expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
		expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
	});
});
