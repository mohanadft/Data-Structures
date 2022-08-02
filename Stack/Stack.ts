import { ListNode } from '../LinkedList/LinkedListDS'

class Stack<T> {
	root: ListNode<T> | null
	constructor(root: T) {
		this.root = new ListNode(root)
	}

	push(data: T) {
		const newNode = new ListNode(data)
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

const check = <T>(arr: number[]) => {
	let arr2 = [...arr]
	if (arr.join('') === arr2.sort((a, b) => a - b).join('')) return true

	for (let i in arr) {
		if (arr[+i] < arr[+i + 1]) return false
	}
	return true
}
