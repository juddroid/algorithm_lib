const graph = {};

graph['me'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

console.table(graph);

const isMangoSeller = (name) => name.length > 5;

const bfs = (obj, target) => {
  let searchQueue = [];
  searchQueue = searchQueue.concat(obj[target]);
  let current;
  let searched = [];
  while (searchQueue.length) {
    current = searchQueue.shift();

    if (!searched.includes(current)) {
      if (isMangoSeller(current)) return current;
      else {
        searchQueue = searchQueue.concat(obj[current]);
        searched.push(current);
      }
    }
  }
  return false;
};

const result = bfs(graph, 'me');
console.log(result);
