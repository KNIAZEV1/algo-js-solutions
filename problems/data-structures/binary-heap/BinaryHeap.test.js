import { MaxBinaryHeap } from './BinaryHeap';

describe('BinaryHeap', () => {
	describe('MaxBinaryHeap', () => {
		describe('insert', () => {
			it('should return a valid list', () => {
				const heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
				heap.insert(55);
				expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
			});
		});
	});
});
