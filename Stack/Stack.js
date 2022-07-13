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

// Check if an array is stack sortable

const check = arr => {
	let arr2 = [...arr]
	if (arr.join('') === arr2.sort((a, b) => a - b).join('')) return true
	for (let i in arr) {
		if (arr[+i] < arr[+i + 1]) return false
	}
	return true
}

console.log(check([1, 2, 3]))
