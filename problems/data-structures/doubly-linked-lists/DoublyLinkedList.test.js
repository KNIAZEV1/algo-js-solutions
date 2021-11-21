import { DoublyLinkedList } from './DoublyLinkedList';

const TEST_VALUES = {
	0: '0',
	1: '123',
	2: '1234',
	3: '321',
};

function getListWithValues() {
	const list = new DoublyLinkedList();
	list.push(TEST_VALUES[1]);
	list.push(TEST_VALUES[2]);
	list.push(TEST_VALUES[3]);

	return list;
}

describe('DoublyLinkedList', () => {
	describe('push', () => {
		it('should have a node with 123 value', () => {
			const list = new DoublyLinkedList();
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
		it('should return undefined', () => {
			const list = getListWithValues();
			list.pop();
			list.pop();
			list.pop();

			expect(list.pop()).toBe(undefined);
		});
	});
	describe('shift', () => {
		it('should return a node with length === 2, head value === 1234, tail value === 321', () => {
			const list = getListWithValues();
			list.shift();

			expect(list.head.value).toBe(TEST_VALUES[2]);
			expect(list.tail.value).toBe(TEST_VALUES[3]);
			expect(list.length).toEqual(2);
		});
		it('should return undefined', () => {
			const list = getListWithValues();
			list.shift();
			list.shift();
			list.shift();

			expect(list.shift()).toBe(undefined);
		});
	});
	describe('unshift', () => {
		it('should return a node with length === 4, head value === 0, tail value === 321', () => {
			const list = getListWithValues();
			list.unshift(TEST_VALUES[0]);

			expect(list.head.value).toBe(TEST_VALUES[0]);
			expect(list.tail.value).toBe(TEST_VALUES[3]);
			expect(list.length).toEqual(4);
		});
	});
	describe('get', () => {
		it('should get a correct node by index', () => {
			const list = getListWithValues();

			expect(list.get(0).value).toBe(TEST_VALUES[1]);
			expect(list.get(1).value).toBe(TEST_VALUES[2]);
			expect(list.get(2).value).toBe(TEST_VALUES[3]);
			expect(list.head.value).toBe(TEST_VALUES[1]);
			expect(list.tail.value).toBe(TEST_VALUES[3]);
		});
		it('should return undefined', () => {
			const list = getListWithValues();

			expect(list.get(-1)).toBe(undefined);
			expect(list.get(list.length)).toBe(undefined);
		});
	});
	describe('set', () => {
		it('should set a new node instead of old one', () => {
			const list = getListWithValues();

			list.set(0, 'newHead');
			list.set(list.length - 1, 'newTail');

			expect(list.get(0).value).toBe('newHead');
			expect(list.get(1).value).toBe(TEST_VALUES[2]);
			expect(list.get(list.length - 1).value).toBe('newTail');
		});
		it('should return false', () => {
			const list = getListWithValues();

			expect(list.set(-1)).toBe(false);
			expect(list.set(list.length)).toBe(false);
		});
	});
	describe('insert', () => {
		it('should place a new node on the index of old one and keep old one as well', () => {
			const list = getListWithValues();

			list.insert(0, 'newHead');
			list.insert(list.length - 1, 'newTail');

			expect(list.get(0).value).toBe('newHead');
			expect(list.get(1).value).toBe(TEST_VALUES[1]);
			expect(list.get(list.length - 1).value).toBe(TEST_VALUES[3]);
			expect(list.get(list.length - 2).value).toBe('newTail');
		});
		it('should return false', () => {
			const list = getListWithValues();

			expect(list.insert(-1)).toBe(false);
		});
	});
	describe('remove', () => {
		it('should delete a node by index', () => {
			const list = getListWithValues();

			list.remove(0);

			expect(list.get(0).value).toBe(TEST_VALUES[2]);
		});
		it('should return undefined', () => {
			const list = getListWithValues();

			expect(list.remove(-1)).toBe(undefined);
			expect(list.remove(list.length)).toBe(undefined);
		});
	});
});
