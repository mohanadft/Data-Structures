'use strict'
class Graph {
	constructor() {
		this.numberOfNodes = 0
		this.adjacentList = {}
	}
	addVertex(node) {
		this.adjacentList[String(node)] = []
		this.numberOfNodes++
	}
	addEdge(node1, node2) {
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
define('LinkedList/LinkedListDS', ['require', 'exports'], function (
	require,
	exports
) {
	'use strict'
	Object.defineProperty(exports, '__esModule', { value: true })
	exports.ListNode = void 0
	class ListNode {
		constructor(data) {
			this.data = data
			this.next = null
		}
	}
	exports.ListNode = ListNode
	class LinkedList {
		constructor() {
			this.head = null
			this.size = 0
		}
		insertFirst(data) {
			let newNode = new ListNode(data)
			if (!this.head) {
				this.head = newNode
				this.size++
				return
			}
			newNode.next = this.head
			this.head = newNode
			this.size++
		}
		insertLast(data) {
			let newNode = new ListNode(data)
			if (this.head === null) {
				this.head = newNode
				return
			}
			let current = this.head
			while (current.next) {
				current = current.next
			}
			current.next = newNode
			this.size++
		}
		insertAtIndex(index, data) {
			if (this.head === null || index > this.size) return
			if (index === 0) {
				this.insertFirst(data)
				return
			}
			if (index === this.size) {
				this.insertLast(data)
				this.size++
				return
			}
			let newNode = new ListNode(data)
			let current = this.head
			for (let i = 0; i < index - 1 && current; i++) current = current.next
			if (current) {
				newNode.next = current.next
				current.next = newNode
			}
			this.size++
		}
		removeFirst() {
			if (this.head === null) return
			let temp = this.head.data
			this.head = this.head.next
			this.size--
			return temp
		}
		removeLast() {
			var _a
			if (this.head === null) return
			let curr = this.head
			while (
				(_a = curr === null || curr === void 0 ? void 0 : curr.next) === null ||
				_a === void 0
					? void 0
					: _a.next
			)
				curr = curr.next
			if (curr && curr.next) {
				let temp = curr.next.data
				curr.next = null
				return temp
			}
			this.size--
		}
		removeAtIndex(index) {
			let target
			if (!this.head || index >= this.size) return
			if (index === 0) {
				target = this.removeFirst()
				return target
			}
			if (index === this.size - 1) {
				target = this.removeLast()
				return target
			}
			let current = this.head
			for (let i = 0; i < index - 1 && current; i++) current = current.next
			if (current && current.next) {
				target = current.next.data
				current.next = current.next.next
			}
			this.size--
			return target
		}
		indexOf(data) {
			let index = 0
			if (this.head === null) {
				return -1
			}
			let curr = this.head
			while (curr) {
				if (curr.data === data) {
					return index
				}
				index++
				curr = curr.next
			}
			return -1
		}
		elementAt(index) {
			if (!this.head) {
				return
			}
			let curr = this.head
			for (let i = 0; i < index && curr; i++) {
				curr = curr.next
			}
			return curr && curr.data
		}
		concat(list) {
			if (this.head == null && list.head == null) {
				return null
			}
			let N1 = this.head,
				N2 = list.head
			if (N1) {
				while (N1.next) {
					N1 = N1.next
				}
				N1.next = N2
			}
			return this
		}
		reverse() {
			let N = this.head
			let newHead = null
			while (N) {
				if (newHead) {
					let newNode = new ListNode(N.data)
					newNode.next = newHead
					newHead = newNode
				} else {
					newHead = new ListNode(N.data)
				}
				N = N.next
			}
			this.head = newHead
		}
		clone() {
			let list = new LinkedList()
			if (!this.head) return list
			let N = this.head
			while (N) {
				list.insertLast(N.data)
				N = N.next
			}
			return list
		}
		print() {
			let N = this.head
			while (N) {
				console.log(N.data)
				N = N.next
			}
		}
		printReverse(head, cb = console.log) {
			let N = head
			if (N) {
				this.printReverse(N.next)
				cb(N.data)
			}
		}
		clear() {
			this.head = null
		}
	}
	// TODO: Move last element to front of a given Linked List
	/**
	 *
	 * @param {LinkedList} list
	 * @returns LinkedList
	 */
	const moveLastElementToFront = list => {
		if (list.size === 0 || list.size === 1 || list.head === null) return list
		let N = list.head
		let N1 = list.head
		while (N.next) {
			N1 = N
			N = N.next
		}
		N.next = list.head
		N1.next = null
		list.head = N
		return list
	}
	// TODO: Length Of List Iteratively
	/**
	 *
	 * @param {LinkedList} list
	 * @returns number
	 */
	const lengthIteratively = list => {
		let N = list.head
		let count = 0
		while (N) {
			count++
			N = N.next
		}
		return count
	}
	// TODO: Length Of List Recursively
	/**
	 *
	 * @param {ListNode} head
	 * @returns number
	 */
	const lengthRecursively = head => {
		if (head === null) return 0
		let count = 0
		if (head) {
			count++
			count += lengthRecursively(head.next)
		}
		return count
	}
	// TODO: Print the middle of a given linked list
	/**
	 *
	 * @param {LinkedList} list
	 * @returns null
	 */
	const printMiddle = list => {
		if (list.head === null) return
		if (list.head.next === null) {
			console.log(list.head.data)
			return
		}
		let curr = list.head
		for (let i = 0; i < list.size / 2 - 1 && curr; i++) curr = curr.next
		if (curr) console.log(curr.data)
	}
	// TODO: check if a singly linked list is palindrome
	/**
	 *
	 * @param {LinkedList} list
	 * @returns boolean
	 */
	const isPalindrome2 = list => {
		let list2 = list.clone()
		list.reverse()
		let N1 = list.head
		let N2 = list2.head
		while (N1 && N2) {
			if (N1.data !== N2.data) return false
			N1 = N1.next
			N2 = N2.next
		}
		return true
	}
	// TODO: check if a singly linked list is palindrome
	/**
	 *
	 * @param {ListNode} head
	 * @returns boolean
	 */
	const isPalindrome = head => {
		if (head === null || head.next === null) return true
		let curr = head
		let values = []
		while (curr) {
			values.push(curr.data)
			curr = curr.next
		}
		return values.join('') == values.reverse().join('')
	}
	// TODO: Reverse a single linked list
	/**
	 *
	 * @param {LinkedList} list
	 * @returns LinkedList
	 */
	const reverse = list => {
		let current = list.head
		const newList = new LinkedList()
		while (current) {
			newList.insertFirst(current.data)
			current = current.next
		}
		return newList
	}
	/**
	 * TODO:
	 * Delete Middle Node:
	 *
	 * Implement an algorithm to delete a node in the middle
	 * (i.e., any node but the first and last node, not necessarily the exact middle)
	 * of a singly linked list, given only access to that node.
	 *
	 * @param {ListNode<T>} node
	 * @returns null
	 */
	const deleteNode = node => {
		if (!node || !node.next) return false
		let next = node.next
		node.data = next.data
		node.next = next.next
		return true
	}
	/**
	 *
	 * @param {ListNode<T>} head
	 * @param {T} value
	 * @returns {boolean}
	 */
	// TODO: Find an element
	const find = (head, value) => {
		if (!head) return false
		if (head.data === value) return true
		return find(head.next, value)
	}
	/**
	 * You are given two non-empty linked lists representing two non-negative integers.
	 * The digits are stored in reverse order, and each of their nodes contains a single digit.
	 * Add the two numbers and return the sum as a linked list.
	 *
	 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
	 *
	 * @param {ListNode<number>} l1
	 * @param {ListNode<number>} l2
	 * @return {ListNode<number>}
	 */
	const addTwoNumbers = (l1, l2) => {
		let [p1, p2] = [l1, l2]
		let nOfNodesInOne = 1,
			nOfNodesInTwo = 1
		while (p1.next) {
			p1 = p1.next
			nOfNodesInOne++
		}
		while (p2.next) {
			p2 = p2.next
			nOfNodesInTwo++
		}
		if (nOfNodesInOne > nOfNodesInTwo) {
			let i = 0
			while (i < nOfNodesInOne - nOfNodesInTwo) {
				p2.next = new ListNode(0)
				p2 = p2.next
				i++
			}
		} else {
			let i = 0
			while (i < nOfNodesInTwo - nOfNodesInOne) {
				p1.next = new ListNode(0)
				p1 = p1.next
				i++
			}
		}
		p1 = l1
		p2 = l2
		while (p1 && p2) {
			let sum = p1.data + p2.data
			if (sum >= 10) {
				p1.data = sum % 10
				if (p1.next) {
					p1.next.data += ~~(sum / 10)
				} else {
					p1.next = new ListNode(~~(sum / 10))
				}
			} else {
				p1.data += p2.data
			}
			p1 = p1.next
			p2 = p2.next
		}
		return l1
	}
	/**
	 * TODO: Given the head of a linked list, remove the nth node from
	 * the end of the list and return its head.
	 *
	 * @param {ListNode} head
	 * @param {number} n
	 * @return {ListNode}
	 */
	const removeNthFromEnd = (head, n) => {
		let p1 = head
		let p2 = head
		for (let i = 0; i < n && p2; i++) {
			if (p2.next === null) {
				if (i === n - 1 && head) head = head.next
			}
			p2 = p2.next
		}
		if (p2) {
			while (p2.next !== null && p1) {
				p1 = p1.next
				p2 = p2.next
			}
		}
		if (p1 && p1.next) {
			p1.next = p1.next.next
		}
		return head
	}
	/**
	 * @param {ListNode[]} lists
	 * @return {ListNode}
	 */
	const mergeKLists = lists => {
		if (lists.length === 0 || (lists.length === 1 && lists[0] === null))
			return null
		let values = lists
			.reduce((acc, curr) => {
				let p = curr
				while (p) {
					acc.push(p.data)
					p = p.next
				}
				return acc
			}, [])
			.sort((a, b) => {
				return b - a
			})
		if (values.length) {
			let mergedList = new ListNode(values.pop())
			let p = mergedList
			while (values.length) {
				p.next = new ListNode(values.pop())
				p = p.next
			}
			return mergedList
		}
		return null
	}
})
define('Stack/Stack', [
	'require',
	'exports',
	'LinkedList/LinkedListDS'
], function (require, exports, LinkedListDS_1) {
	'use strict'
	Object.defineProperty(exports, '__esModule', { value: true })
	class Stack {
		constructor(root) {
			this.root = new LinkedListDS_1.ListNode(root)
		}
		push(data) {
			const newNode = new LinkedListDS_1.ListNode(data)
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
})
//# sourceMappingURL=all.js.map
