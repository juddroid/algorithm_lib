const arr = [1, 3, 2, 4, 9, 7, 6, 5, 8];

const arr1 = [1];
const arr2 = [2, 1];
const arr3 = [3, 5, 1];

const quickSort = (list) => {
  if (list.length < 2) return list;

  let pivot = list[0];
  const left = [];
  const right = [];
  for (let i = 1; i < list.length; i++) {
    list[i] < list[0] ? left.push(list[i]) : right.push(list[i]);
  }

  let newList = [];
  newList = newList
    .concat(quickSort(left))
    .concat([pivot])
    .concat(quickSort(right));
  return newList;
};

console.log(quickSort(arr));
