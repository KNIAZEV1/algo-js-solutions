import { Graph } from './Graph';

describe('Graph', () => {
	describe('addVertex', () => {
		it('should return a valid adjacency list', () => {
			const g = new Graph();

			g.addVertex('Dallas');
			expect(g.adjacencyList['Dallas']).toEqual([]);
			g.addVertex('Tokyo');
			expect(g.adjacencyList['Tokyo']).toEqual([]);
		});
	});
	describe('addEdge', () => {
		it('should return a valid adjacency list', () => {
			const g = getGraphWithVertecies();

			g.addEdge('Dallas', 'Miami');

			expect(g.adjacencyList['Dallas']).toEqual(['Miami']);
			expect(g.adjacencyList['Miami']).toEqual(['Dallas']);

			g.addEdge('Dallas', 'Florida');

			expect(g.adjacencyList['Dallas']).toEqual(['Miami', 'Florida']);
			expect(g.adjacencyList['Florida']).toEqual(['Dallas']);
			expect(g.adjacencyList['Miami']).toEqual(['Dallas']);
		});
	});
	describe('removeEdge', () => {
		it('should return a valid adjacency list', () => {
			const g = getGraphWithVertecies();

			g.addEdge('Dallas', 'Miami');
			g.addEdge('Dallas', 'Florida');
			g.removeEdge('Dallas', 'Miami');

			expect(g.adjacencyList['Miami']).toEqual([]);
			expect(g.adjacencyList['Dallas']).toEqual(['Florida']);

			g.removeEdge('Dallas', 'Florida');

			expect(g.adjacencyList['Dallas']).toEqual([]);
			expect(g.adjacencyList['Florida']).toEqual([]);
		});
	});
	describe('removeVertex', () => {
		it('should return a valid adjacency list', () => {
			const g = getGraphWithVertecies();

			g.addEdge('Dallas', 'Miami');
			g.addEdge('Dallas', 'Florida');

			g.removeVertex('Dallas');

			expect(g.adjacencyList['Dallas']).toBe(undefined);
			expect(g.adjacencyList['Florida']).toEqual([]);
			expect(g.adjacencyList['Miami']).toEqual([]);
		});
	});
	describe('DFS', () => {
		it('should return a valid list using recursive DFS', () => {
			const g = getGraph();

			expect(g.DFSr('A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
		});
		it('should return a valid list using interative DFS', () => {
			const g = getGraph();

			expect(g.DFSi('A')).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);
		});
	});
	describe('BFS', () => {
		it('should return a valid list using interative BFS', () => {
			const g = getGraph();

			expect(g.BFSi('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
		});
	});
});

function getGraphWithVertecies() {
	const g = new Graph();

	g.addVertex('Dallas');
	g.addVertex('Florida');
	g.addVertex('Miami');

	return g;
}

function getGraph() {
	const g = new Graph();

	g.addVertex('A');
	g.addVertex('B');
	g.addVertex('C');
	g.addVertex('D');
	g.addVertex('E');
	g.addVertex('F');

	g.addEdge('A', 'B');
	g.addEdge('A', 'C');
	g.addEdge('B', 'D');
	g.addEdge('C', 'E');
	g.addEdge('D', 'E');
	g.addEdge('D', 'F');
	g.addEdge('E', 'F');

	return g;
}
// Graph Schema:
//      A
//    /   \
//   B    C
//   |    |
//   D -- E
//   \    /
//     F

/* => adjacencyList: {
	A: [ 'B', 'C' ],
	B: [ 'A', 'D' ],
	C: [ 'A', 'E' ],
	D: [ 'B', 'E', 'F' ],
	E: [ 'C', 'D', 'F' ],
	F: [ 'D', 'E' ]
} */