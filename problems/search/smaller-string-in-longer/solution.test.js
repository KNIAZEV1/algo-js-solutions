import { countAppearsTime } from './solution';

describe('countAppearsTime', () => {
	it('should return 0', () => {
		expect(countAppearsTime('', 'kek')).toEqual(0);
		expect(countAppearsTime('asd', '')).toEqual(0);
		expect(countAppearsTime('asd', 'asdfx')).toEqual(0);
		expect(countAppearsTime('hello there I am Frank', 'max')).toEqual(0);
	});
	it('should return a valid number', () => {
		expect(countAppearsTime('lorie loled', 'lol')).toEqual(1);
		expect(countAppearsTime('assagxzomgasfszomg', 'omg')).toEqual(2);
		expect(countAppearsTime('lorie loled', 'l')).toEqual(3);
	});
});
