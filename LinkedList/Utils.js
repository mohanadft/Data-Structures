// TODO: Move last element to front of a given Linked List

const moveLastElementToFront = list => {
	if (list.size === 0 || list.size === 1) return list
	let N = list.head
	let N1 = null

	while (N.next) {
		N1 = N
		N = N.next
	}
	N.next = list.head
	N1.next = null
	list.head = N
}

// TODO: Length Of List Iteratively

const length = list => {
	let N = list.head
	let count = 0
	while (N) {
		count++
		N = N.next
	}
	return count
}

// TODO: Length Of List Recursively

const lengthRecursively = head => {
	if (!head) return 0
	let count = 0
	if (head) {
		count++
		count += lengthRecursively(head.next)
	}
	return count
}

// TODO: Print the middle of a given linked list

const printMiddle = list => {
	if (!list.head) return
	if (!list.head.next) {
		console.log(list.head.data)
		return
	}
	let N = list.head
	for (let i = 0; i < list.size / 2 - 1; i++) N = N.next
	console.log(N.data)
}

// TODO: check if a singly linked list is palindrome

const isPalindrome = list => {
	let list2 = list.clone()
	list.reverse()
	let N1 = list.head
	let N2 = list2.head

	while (N1) {
		if (N1.data !== N2.data) return false
		N1 = N1.next
		N2 = N2.next
	}
	return true
}
