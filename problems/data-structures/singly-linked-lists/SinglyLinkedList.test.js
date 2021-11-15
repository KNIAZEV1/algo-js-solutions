import { SinglyLinkedList } from './SinglyLinkedList';

const TEST_VALUES = {
	0: '0',
	1: '123',
	2: '1234',
	3: '321',
};

function getListWithValues() {
	const list = new SinglyLinkedList();
	list.push(TEST_VALUES[1]);
	list.push(TEST_VALUES[2]);
	list.push(TEST_VALUES[3]);

	return list;
}

// TODO: add corner cases

describe('SinglyLinkedList', () => {
	describe('push', () => {
		it('should have a node with 123 value', () => {
			const list = new SinglyLinkedList();
			list.push(TEST_VALUES[1]);

			expect(list.head.value).toBe(TEST_VALUES[1]);
			expect(list.tail.value).toBe(TEST_VALUES[1]);
			expect(list.length).toEqual(1);
		});
		it('should have head with 123 value and tail with 321 value', () => {
			const list = getListWithValues();

			expect(list.head.value).toBe(TEST_VALUES[1]);
			expect(list.tail.value).toBe(TEST_VALUES[3]);
			expect(list.length).toEqual(3);
		});
	});
	describe('pop', () => {
		it('should return a node with length === 2, head 123 and tail 1234 value', () => {
			const list = getListWithValues();
			list.pop();

			expect(list.head.value).toBe(TEST_VALUES[1]);
			expect(list.tail.value).toBe(TEST_VALUES[2]);
			expect(list.length).toEqual(2);
		});
		it('should return a empty node with length === 0', () => {
			const list = getListWithValues();
			list.pop();
			list.pop();
			list.pop();
			list.pop();

			expect(list.length).toEqual(0);
		});
	});
	describe('shift', () => {
		it('should return a node with length === 2, head value === 1234, tail value === 321', () => {
			const list = getListWithValues();
			list.shift()

			expect(list.head.value).toBe(TEST_VALUES[2]);
			expect(list.tail.value).toBe(TEST_VALUES[3]);
			expect(list.length).toEqual(2);
		});
	});
	describe('unshift', () => {
		it('should return a node with length === 4, head value === 0, tail value === 321', () => {
			const list = getListWithValues();
			list.unshift(TEST_VALUES[0])

			expect(list.head.value).toBe(TEST_VALUES[0]);
			expect(list.tail.value).toBe(TEST_VALUES[3]);
			expect(list.length).toEqual(4);
		});
	});
	describe('get', () => {
		it('should', () => {});
	});
	describe('set', () => {
		it('should', () => {});
	});
	describe('insert', () => {
		it('should', () => {});
	});
	describe('remove', () => {
		it('should', () => {});
	});
	describe('reverse', () => {
		it('should', () => {});
	});
});
