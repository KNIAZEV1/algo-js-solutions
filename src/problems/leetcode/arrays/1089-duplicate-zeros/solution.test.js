import { duplicateZeros } from './solution';

describe('duplicateZeros', () => {
	it.skip('should duplicate zeros in array', () => {
		const arr = [1, 0, 2, 3, 0, 4, 5, 0];
		duplicateZeros(arr);
		expect(arr).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
	});
	it('should not duplicate zeros in array', () => {
		const arr = [1, 2, 3];
		duplicateZeros(arr);
		expect(arr).toEqual([1, 2, 3]);
	});
});
