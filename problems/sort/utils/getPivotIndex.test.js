import { getPivotIndex } from './getPivotIndex';

describe('getPivotIndex', () => {
	it('should return index === 3', () => {
		expect(getPivotIndex([4, 8, 2, 1, 5, 7, 6, 3])).toEqual(3);
	});
	it('should return index === 6', () => {
		expect(getPivotIndex([44, 1, 6, 3, 5, -7, 2])).toEqual(6);
	});
});
