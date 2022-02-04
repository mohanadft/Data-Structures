class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAtIndex(index, data) {
    let newNode = new Node(data);

    if (index > this.size) return;
    if (index === 0) {
      this.insertFirst(data);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1 && current; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.size++;
  }

  removeFirst() {
    if (!this.head) return;
    let temp = this.head.data;
    this.head = this.head.next;
    this.size--;
    return temp;
  }

  removeLast() {
    let N = this.head;
    while (N.next.next != null) {
      N = N.next;
    }
    let temp = N.next.data;
    N.next = null;
    this.size--;
    return temp;
  }

  indexOf(data) {
    let index = 0;
    if (!this.head) {
      return -1;
    }

    let N = this.head;
    while (N) {
      if (N.data === data) {
        return index;
      }
      index++;
      N = N.next;
    }
    return -1;
  }

  elementAt(index) {
    if (!this.head) {
      return;
    }
    let N = this.head;
    for (let i = 0; i < index; i++) {
      N = N.next;
    }
    return N.data;
  }

  concat(list) {
    if (this.head == null && list.head == null) {
      return null;
    }
    let N1 = this.head,
      N2 = list.head;
    while (N1.next) {
      N1 = N1.next;
    }
    N1.next = N2;
    return this;
  }

  print() {
    let N = this.head;
    while (N) {
      console.log(N.data);
      N = N.next;
    }
  }

  printReverse(head) {
    let N = head;
    if (N) {
      this.printReverse(N.next);
      console.log(N.data);
    }
  }

  clear() {
    this.head = null;
  }
}
