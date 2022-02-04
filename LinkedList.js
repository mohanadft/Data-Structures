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

  inserFirst(data) {
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
      newNode.next = this.head;
      this.head = newNode;
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

  print() {
    let N = this.head;
    while (N) {
      console.log(N.data);
      N = N.next;
    }
  }
}

let list = new LinkedList();
let list1 = new LinkedList();

list1.inserFirst(5);
list1.inserFirst(1);
list1.inserFirst(3);
list1.inserFirst(0);

list.inserFirst(0);
list.inserFirst(10);
list.inserFirst(5);
list.inserFirst(15);

function mergeLists(head1, head2) {
  if (head1 == null && head2 == null) {
    return null;
  }
  let N1 = head1,
    N2 = head2;

  while (N1.next) {
    N1 = N1.next;
  }
  N1.next = N2;

  let nForSort = head1;
  let n2ForSort = null;

  while (nForSort) {
    n2ForSort = nForSort.next;
    while (n2ForSort) {
      if (nForSort.data > n2ForSort.data)
        [n2ForSort.data, nForSort.data] = [nForSort.data, n2ForSort.data];
      n2ForSort = n2ForSort.next;
    }
    nForSort = nForSort.next;
  }
  return head1;
}

let ll = new LinkedList();

ll.print();
