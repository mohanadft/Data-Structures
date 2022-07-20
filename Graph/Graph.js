class Graph {
	constructor() {
		this.numberOfNodes = 0
		this.adjacentList = {}
	}
	addVertex(node) {
		this.adjacentList[node] = []
		this.numberOfNodes++
	}

	addEdge(node1, node2) {
		if (node1 && node2 in this.adjacentList) {
			this.adjacentList[node1].push(node2)
			this.adjacentList[node2].push(node1)
		}
	}

	showConnections() {
		const vertecies = Object.keys(this.adjacentList)
		for (let vertex of vertecies) {
			console.log(`${vertex} => ${this.adjacentList[vertex].join(' ')}`)
		}
	}
}
