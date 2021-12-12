import { Graph } from './Graph';

function getGraphWithVertecies() {
	const g = new Graph();

	g.addVertex('Dallas');
	g.addVertex('Florida');
	g.addVertex('Miami');

	return g;
}

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
});
