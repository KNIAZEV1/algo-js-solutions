import { longestOnes } from './solution';

describe('longestOnes', () => {
	it('should return the maximum number of consecutive 1`s in the array if you can flip at most k 0`s', () => {
		expect(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)).toEqual(6);
		expect(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)).toEqual(10);
	});
});
