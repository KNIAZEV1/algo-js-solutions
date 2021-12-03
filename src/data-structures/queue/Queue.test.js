import { Queue } from './Queue'

describe('Queue', () => {
	describe('enqueue', () => {
		it('should add new node to queue', () => {
			const queue = new Queue()

			queue.enqueue(1)
			expect(queue.first.value).toEqual(1)
			expect(queue.last.value).toEqual(1)
			expect(queue.size).toEqual(1)

			queue.enqueue(2)
			expect(queue.first.value).toEqual(1)
			expect(queue.last.value).toEqual(2)
			expect(queue.size).toEqual(2)
		})
	})
	describe('dequeue', () => {
		it('should remove the first node in the list', () => {
			const queue = new Queue()

			queue.enqueue(1)
			expect(queue.size).toEqual(1)
			queue.dequeue()
			expect(queue.size).toEqual(0)
			expect(queue.dequeue()).toBe(null)

			queue.enqueue(1)
			queue.enqueue(2)
			queue.enqueue(3)
			expect(queue.size).toEqual(3)
			queue.dequeue()
			expect(queue.first.value).toEqual(2)
			expect(queue.last.value).toEqual(3)
			expect(queue.size).toEqual(2)
		})
	})
})