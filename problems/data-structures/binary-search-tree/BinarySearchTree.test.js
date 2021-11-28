import { BinarySearchTree } from './BinarySearchTree';

function getValidBst(bst) {
	bst.insert(10);
	bst.insert(8);
	bst.insert(9);
	bst.insert(12);

	//       10
	//    8     12
	//      9

	return bst;
}
describe('BinarySearchTree', () => {
	describe('insert', () => {
		it('should insert a new node', () => {
			const bst = getValidBst(new BinarySearchTree());

			expect(bst.root.value).toEqual(10);
			expect(bst.root.left.value).toEqual(8);
			expect(bst.root.left.right.value).toEqual(9);
			expect(bst.root.right.value).toEqual(12);
		});
		it('should return undefined', () => {
			const bst = getValidBst(new BinarySearchTree());

			expect(bst.insert(10)).toBe(undefined);
			expect(bst.insert(9)).toBe(undefined);
		});
	});

	describe('contains', () => {
		it('should return true', () => {
			const bst = getValidBst(new BinarySearchTree());

			expect(bst.contains(10)).toBe(true);
			expect(bst.contains(8)).toBe(true);
			expect(bst.contains(9)).toBe(true);
			expect(bst.contains(12)).toBe(true);
		});
		it('should return false', () => {
			const bst = getValidBst(new BinarySearchTree());

			expect(bst.contains(11)).toBe(false);
			expect(bst.contains(7)).toBe(false);
			expect(bst.contains(13)).toBe(false);
			expect(bst.contains(123)).toBe(false);
		});
	});

	describe('bfs', () => {
		it('should return a valid list of nodes', () => {
			const bst = getValidBst(new BinarySearchTree());

			expect(bst.bfs()).toEqual([10, 8, 12, 9]);
			expect(bst.contains(8)).toBe(true);
			expect(bst.contains(9)).toBe(true);
			expect(bst.contains(12)).toBe(true);
		});
	});

	describe('dfs', () => {
		describe('pre-order', () => {
			it('should return a valid list of nodes', () => {
				const bst = getValidBst(new BinarySearchTree());

				expect(bst.dfsPreOrder()).toEqual([10, 8, 9, 12]);
				expect(bst.contains(8)).toBe(true);
				expect(bst.contains(9)).toBe(true);
				expect(bst.contains(12)).toBe(true);
			});
		});
	});
});
