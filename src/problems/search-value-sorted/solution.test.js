import { search } from './solution';

describe('search', () => {
	it('should return -1', () => {
		expect(search([],11)).toEqual(-1);
		expect(search([1,2,3,4,5,6],11)).toEqual(-1);
	});
	it('should return valid index', () => {
		expect(search([1,2,3,4,5,6],4)).toEqual(3);
		expect(search([1,2,3,4,5,6],6)).toEqual(5);
	});
});
