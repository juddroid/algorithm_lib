const arr = [1, 2, 2, 3, 3, 3];
const stations = {
  kone: ['id', 'nv', 'ut'],
  ktwo: ['wa', 'id', 'mt'],
  kthree: ['or', 'nv', 'ca'],
  kfour: ['nv', 'ut'],
  kfive: ['ca', 'az'],
};

// 집합
const set = [...new Set(arr)];

console.log(set);
console.table(stations);
