import { Stack } from './Stack'

describe('Stack', () => {
	describe('push', () => {
		it('should add new node to stack', () => {
			const stack = new Stack()

			stack.push(1)
			expect(stack.first.value).toEqual(1)
			expect(stack.last.value).toEqual(1)
			expect(stack.size).toEqual(1)

			stack.push(2)
			expect(stack.first.value).toEqual(2)
			expect(stack.last.value).toEqual(1)
			expect(stack.size).toEqual(2)
		})
	})
	describe('pop', () => {
		it('should remove the first node in the list', () => {
			const stack = new Stack()

			stack.push(1)
			expect(stack.size).toEqual(1)
			stack.pop()
			expect(stack.size).toEqual(0)
			expect(stack.pop()).toBe(null)

			stack.push(1)
			stack.push(2)
			expect(stack.size).toEqual(2)
			stack.pop()
			expect(stack.first.value).toEqual(1)
			expect(stack.last.value).toEqual(1)
			expect(stack.size).toEqual(1)
		})
	})
})