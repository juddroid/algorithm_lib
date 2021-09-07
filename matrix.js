const rotateMatrix = (list) => {
  let temp = null;
  for (let s = 0, e = list.length - 1; s < e; s++, e--) {
    for (let i = s, j = e; i < e; i++, j--) {
      temp = list[s][i];
      list[s][i] = list[i][e];
      list[i][e] = list[e][j];
      list[e][j] = list[j][s];
      list[j][s] = temp;
    }
  }
  return list;
};

const printMatrix = (list) => {
  let temp = '';
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      temp += list[i][j] + ' ';
    }
    if (i !== list.length - 1) temp += '\n';
  }
  return temp;
};

const list = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(printMatrix(list));
rotateMatrix(list);
console.log('\n');
console.log(printMatrix(list));
