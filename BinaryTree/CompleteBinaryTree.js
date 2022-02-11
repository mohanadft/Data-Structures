class Node {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null
	}
}

class CompleteBinaryTree {
	#size = 0
	constructor(root) {
		this.root = root
		if (root) this.#size++
	}

	insert(data) {
		if (!this.root) this.root = new Node(data)
		let queue = [this.root]

		while (queue.length > 0) {
			let target = queue.shift()
			if (target) {
				if (!target.left) {
					target.left = new Node(data)
					return
				} else if (!target.right) {
					target.right = new Node(data)
					return
				}
				queue.push(target.left)
				queue.push(target.right)
			}
		}
		this.#size++
	}

	BreadthFirstSearchTraversal() {
		if (!this.root) return
		let values = []
		let queue = [this.root]

		while (queue.length > 0) {
			let target = queue.shift()
			if (target) {
				values.push(target.data)
				queue.push(target.left)
				queue.push(target.right)
			}
		}
		return values.join`, `
	}

	size() {
		return this.#size
	}
}

const isCompleteBinaryTree = root => {
	let queue = [root]

	while (queue.length > 0) {
		let target = queue.shift()
		if (target) {
			if (!target.left && target.right) return false
		}
	}

	return true
}
