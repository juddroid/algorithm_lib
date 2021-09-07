class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack extends Node {
  constructor(data) {
    super();
    this.top = new Node(data);
  }

  pop() {
    if (this.top === null) return 'empty';
    const item = this.top.data;
    this.top = this.top.next;
    return item;
  }

  push(item) {
    const node = new Node(item);
    node.next = this.top;
    this.top = node;
  }

  peek() {
    if (this.top === null) return 'empty';
    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
