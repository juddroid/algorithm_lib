class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.root = null;
  }
}

class Tree extends Node {
  makeTree(list) {
    this.root = this.makeTreeR(list, 0, list.length - 1);
  }

  makeTreeR(list, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new Node(list[mid]);
    node.left = this.makeTreeR(list, start, mid - 1);
    node.right = this.makeTreeR(list, mid + 1, end);
    return node;
  }

  searchBTree(node, target) {
    if (target < node.data) {
      console.log('Data is smaller than ' + node.data);
      this.searchBTree(node.left, target);
    } else if (target > node.data) {
      console.log('Data is bigger than ' + node.data);
      this.searchBTree(node.right, target);
    } else {
      console.log('Data found!');
    }
  }
}

let arr = Array(10)
  .fill(0)
  .map((el, idx) => (el = idx));

let tree = new Tree();
tree.makeTree(arr);

tree.searchBTree(tree.root, 2);
