import Node from './node.js';

class Queue extends Node {
  constructor() {
    super();
    this.first = null;
    this.last = null;
  }

  add(item) {
    const node = new Node(item);

    if (this.last !== null) {
      this.last.next = node;
    }
    this.last = node;

    if (this.first === null) {
      this.first = this.last;
    }
  }

  remove() {
    if (this.first === null) return 'error';

    this.data = this.first.data;
    this.first = this.first.next;

    if (this.first === null) {
      this.last = null;
    }
    return this.data;
  }

  peek() {
    if (this.first === null) return 'error';
    return this.first.data;
  }

  isEmpty() {
    return this.first === null;
  }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);

console.log(queue.remove());
console.log(queue.peek());
console.log(queue.remove());
console.log(queue.remove());
console.log(queue.isEmpty());
console.log(queue.remove());
console.log(queue.isEmpty());

console.log(queue);
