import { deleteDuplicates } from './solution';

describe('deleteDuplicates', () => {
	it('should return null', () => {
		expect(deleteDuplicates()).toBeNull();
		expect(deleteDuplicates([])).toBeNull();
	});
});
