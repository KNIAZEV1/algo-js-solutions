import { deleteDuplicates } from './solution';

describe.skip('deleteDuplicates', () => {
	it('should return null', () => {
		expect(deleteDuplicates()).toBeNull();
		expect(deleteDuplicates([])).toBeNull();
	});
});
