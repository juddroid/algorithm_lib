class Node {
  constructor(value) {
    this.value = value;
    this.childList = [];
  }

  add(val) {
    this.childList.push(new Node(val));
  }
  del(val) {
    this.childList = this.childList.filter((child) => child.value === val);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  bfs(fn) {
    if (!this.root) return;
    const queue = [this.root];

    while (queue.length !== 0) {
      const current = queue.shift();
      queue.push(...current.childList);
      fn(current);
    }
  }

  dfs(fn) {
    if (!this.root) return;
    const queue = [this.root];

    while (queue.length !== 0) {
      const current = queue.shift();
      queue.unshift(...current.childList);
      fn(current);
    }
  }
}

const tree = new Tree();
tree.root = new Node('root');
tree.root.add('first');
tree.root.add('second');
tree.root.childList[0].add('third');

tree.dfs(console.log);

export { Node, Tree };

// ========== BFS ==========
// Node {
//   value: 'root',
//   childList: [
//     Node { value: 'first', childList: [Array] },
//     Node { value: 'second', childList: [] }
//   ]
// }
// Node {
//   value: 'first',
//   childList: [ Node { value: 'third', childList: [] } ]
// }
// Node { value: 'second', childList: [] }
// Node { value: 'third', childList: [] }

// ========== DFS ==========
// Node {
//   value: 'root',
//   childList: [
//     Node { value: 'first', childList: [Array] },
//     Node { value: 'second', childList: [] }
//   ]
// }
// Node {
//   value: 'first',
//   childList: [ Node { value: 'third', childList: [] } ]
// }
// Node { value: 'third', childList: [] }
// Node { value: 'second', childList: [] }

// 결국 탐색 Node를 currentQueue의 앞에 넣어주느냐 뒤에 넣어주느냐의 차이였다...
