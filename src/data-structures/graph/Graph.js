// undirected
export class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1].includes(vertex2)) {
			this.adjacencyList[vertex1].push(vertex2);
		}
		if (!this.adjacencyList[vertex2].includes(vertex1)) {
			this.adjacencyList[vertex2].push(vertex1);
		}
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(v) => v !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(v) => v !== vertex1
		);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const item = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, item);
		}

		delete this.adjacencyList[vertex];
	}
	// recursive dfs
	DFSr(start) {
		const result = [];
		const visited = {};
		const { adjacencyList } = this;

		(function dfs(vertex) {
			if (!vertex) return;

			visited[vertex] = true;
			result.push(vertex);

			adjacencyList[vertex].forEach((item) => {
				if (!visited[item]) {
					return dfs(item);
				}
			});
		})(start);

		return result;
	}
	// iterative dfs
	DFSi(start) {
		const stack = [start];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;

		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((item) => {
				if (!visited[item]) {
					visited[item] = true;
					stack.push(item);
				}
			});
		}

		return result;
	}
	// iterative bfs
	BFSi(start) {
		const queue = [start];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;

		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((item) => {
				if (!visited[item]) {
					visited[item] = true;
					queue.push(item);
				}
			});
		}

		return result;
	}
}
