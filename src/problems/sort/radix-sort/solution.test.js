import { radixSort } from './solution';

describe('radixSort', () => {
	it('should return a sorted array', () => {
		expect(radixSort([777,4,1,6,3,5,1234,2])).toStrictEqual([1,2,3,4,5,6,777,1234]);
	});
});
