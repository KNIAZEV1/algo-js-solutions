import { sumZero } from './solution';

describe('Sum zero', () => {
	it('should return a pair', () => {
		expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3]);
	});
	it('should return undefined', () => {
		expect(sumZero([])).toBe(undefined);
		expect(sumZero([-2, 0, 1, 3])).toBe(undefined);
		expect(sumZero([1, 2, 3])).toBe(undefined);
	});
});
