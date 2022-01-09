import { lengthOfLongestSubstring } from './solution';

describe('lengthOfLongestSubstring', () => {
	it('should return the length of the longest substring without repeating characters', () => {
		expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
		expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
		expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
	});
});
