class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class SingleLinkedList extends Node {
  append(data) {
    const end = new Node(data);
    let node = this;
    while (node.right !== null) {
      node = node.right;
    }
    node.right = end;
  }
  delete(data) {
    let node = this;
    while (node.right !== null) {
      if (node.right.data === data) {
        node.right = node.right.right;
      } else {
        node = node.right;
      }
    }
  }

  retrieve() {
    let node = this;
    while (node.right !== null) {
      console.log(node.data + ' -> ');
      node = node.right;
    }
    console.log(node.data);
  }
}

const list = new SingleLinkedList(1);

list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.delete(3);
list.retrieve();
list.delete(2);
list.retrieve();
