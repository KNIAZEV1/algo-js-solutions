import { MaxBinaryHeap } from './BinaryHeap';

describe('BinaryHeap', () => {
	describe('MaxBinaryHeap', () => {
		describe('insert', () => {
			it('should return a valid list', () => {
				const heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
				const { length } = heap.values;

				heap.insert(55);
				expect(heap.values.length).toEqual(length + 1);
				expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);

				heap.insert(1);
				expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33, 1]);

				heap.insert(20);
				expect(heap.values).toEqual([55, 39, 41, 20, 27, 12, 33, 1, 18]);
			});
		});
		describe('removeMax', () => {
			it('should return a valid list', () => {
				const heap = new MaxBinaryHeap([55, 39, 41, 18, 27, 12, 33]);
				const { length } = heap.values;

				expect(heap.removeMax()).toEqual(55);
				expect(heap.values.length).toEqual(length - 1);
				expect(heap.values).toEqual([41, 39, 33, 18, 27, 12]);
			});
			it('should return undefined', () => {
				const heap = new MaxBinaryHeap([55]);

				heap.removeMax();
				expect(heap.removeMax()).toBe(undefined);
				expect(heap.values).toEqual([]);
			});
		});
	});
});
