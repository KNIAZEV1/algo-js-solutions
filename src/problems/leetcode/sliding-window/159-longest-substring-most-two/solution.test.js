import { lengthOfLongestSubstringTwoDistinct } from './solution';

describe('lengthOfLongestSubstringTwoDistinct', () => {
	it('should return the length of the longest substring that contains at most two distinct characters.', () => {
		expect(lengthOfLongestSubstringTwoDistinct('eceba')).toEqual(3);
		expect(lengthOfLongestSubstringTwoDistinct('ccaabbb')).toEqual(5);
	});
});
