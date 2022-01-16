import { hasCycle } from './solution';

describe.skip('hasCycle', () => {
	it('should return true if there is a cycle in the linked list. Otherwise, return false', () => {
		expect(hasCycle([3, 2, 0, -4])).toBe(true);
		expect(hasCycle([1, 2])).toBe(true);
		expect(hasCycle([1])).toBe(false);
	});
});
