class TreeNode {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null
	}

	[Symbol.iterator] = function* depthFirst() {
		yield this.data
		if (this.left) yield* this.left
		if (this.right) yield* this.right
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
	preOrder() {
		this.#preOrderUI(this.root)
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

	#postOrderUI(root) {
		let N = root
		if (N) {
			this.#postOrderUI(N.left)
			this.#postOrderUI(N.right)
			console.log(N.data)
		}
	}
	// Wrapper Method

	postOrder() {
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
