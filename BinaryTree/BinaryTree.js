class TreeNode {
	constructor(data, left = null, right = null) {
		this.data = data
		this.left = left
		this.right = right
	}
}

class BinaryTree {
	#root = null
	constructor(root) {
		this.root = root
	}

	#preOrderUI(root, cb) {
		let N = root
		if (N) {
			cb(N.data)
			this.#preOrderUI(N.left)
			this.#preOrderUI(N.right)
		}
	}

	// Wrapper Method
	preOrder(cb = console.log) {
		this.#preOrderUI(this.root, cb)
	}
	#inOrderUI(root) {
		let N = root
		if (N) {
			this.#inOrderUI(N.left)
			console.log(N.data)

			this.#inOrderUI(N.right)
		}
	}

	// Wrapper Method
	inOrder() {
		this.#inOrderUI(this.root)
	}

	#postOrderUI(root, cb) {
		let N = root
		if (N) {
			this.#postOrderUI(N.left)
			this.#postOrderUI(N.right)
			cb(N.data)
		}
	}
	// Wrapper Method

	postOrder(cb = console.log) {
		this.#postOrderUI(this.root, cb)
	}

	// Getters
	get root() {
		return this.#root
	}
}

// Depth First Traversal === preOrder Traversal
const depthFirstTraversal = root => {
	if (!root) return
	const stack = [root]
	while (stack.length > 0) {
		let current = stack.pop()

		if (current.right) stack.push(current.right)
		if (current.left) stack.push(current.left)
	}
	return values.join`, `
}

// TODO: Breadth First Traversal === left to right level wise (Complete Binary Tree)
const BreadthFirstTraversal = root => {
	let values = []
	const queue = [root]
	while (queue.length > 0) {
		let node = queue.shift()
		if (node) {
			values.push(node.data)
			queue.push(node.left)
			queue.push(node.right)
		}
	}
	return values.join`, `
}
