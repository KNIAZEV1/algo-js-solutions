import { MaxPriorityQueue } from './MaxPriorityQueue';
import { MinPriorityQueue } from './MinPriorityQueue';

function getPQ(type = 'max') {
	const pq = type === 'max' ? new MaxPriorityQueue() : new MinPriorityQueue();

	pq.enqueue('lvl 1', 1);
	pq.enqueue('lvl 5', 5);
	pq.enqueue('lvl 2', 2);

	return pq;
}

describe('PriorityQueue', () => {
	describe('MaxPriorityQueue', () => {
		describe('enqueue', () => {
			it('should return a valid list', () => {
				const pq = getPQ();

				expect(pq.values.length).toEqual(3);
				expect(pq.values[0].priority).toEqual(5);
				expect(pq.values[1].priority).toEqual(1);
				expect(pq.values[2].priority).toEqual(2);
			});
		});
		describe('dequeue', () => {
			it('should return a valid list', () => {
				const pq = getPQ();

				expect(pq.dequeue().priority).toEqual(5);
				expect(pq.dequeue().priority).toEqual(2);
				expect(pq.dequeue().priority).toEqual(1);
				expect(pq.values.length).toEqual(0);
			});
			it('should return undefined', () => {
				const pq = getPQ();

				pq.dequeue();
				pq.dequeue();
				pq.dequeue();
				expect(pq.dequeue()).toBe(undefined);
				expect(pq.values.length).toEqual(0);
			});
		});
	});

	describe('Min PriorityQueue', () => {
		describe('enqueue', () => {
			it('should return a valid list', () => {
				const pq = getPQ('min');

				expect(pq.values.length).toEqual(3);
				expect(pq.values[0].priority).toEqual(1);
				expect(pq.values[1].priority).toEqual(5);
				expect(pq.values[2].priority).toEqual(2);
			});
		});
		describe('dequeue', () => {
			it('should return a valid list', () => {
				const pq = getPQ('min');

				expect(pq.dequeue().priority).toEqual(1);
				expect(pq.dequeue().priority).toEqual(2);
				expect(pq.dequeue().priority).toEqual(5);
				expect(pq.values.length).toEqual(0);
			});
			it('should return undefined', () => {
				const pq = getPQ('min');

				pq.dequeue();
				pq.dequeue();
				pq.dequeue();
				expect(pq.dequeue()).toBe(undefined);
				expect(pq.values.length).toEqual(0);
			});
		});
	});
});
