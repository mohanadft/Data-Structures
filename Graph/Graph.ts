class Graph<T> {
	adjacentList: { [x: string]: T[] }
	numberOfNodes: number
	constructor() {
		this.numberOfNodes = 0
		this.adjacentList = {}
	}
	addVertex(node: T) {
		this.adjacentList[String(node)] = []
		this.numberOfNodes++
	}

	addEdge(node1: T, node2: T) {
		if (node1 && node2 in this.adjacentList) {
			this.adjacentList[String(node1)].push(node2)
			this.adjacentList[String(node2)].push(node1)
		}
	}

	showConnections() {
		const vertecies = Object.keys(this.adjacentList)
		for (let vertex of vertecies) {
			console.log(`${vertex} => ${this.adjacentList[vertex].join(' ')}`)
		}
	}
}
