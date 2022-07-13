class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class Stack {
	constructor(root) {
		this.root = new Node(root)
	}

	push(data) {
		const newNode = new Node(data)
		if (!this.root) {
			this.root = newNode
			return
		}
		let currentNode = this.root
		while (currentNode.next) currentNode = currentNode.next
		currentNode.next = newNode
	}

	pop() {
		if (!this.root) return null
		const temp = this.root.data
		this.root = this.root.next
		return temp
	}
}
