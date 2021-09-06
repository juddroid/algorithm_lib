const playList = {
  radioHead: 156,
  kishoreKumar: 141,
  theBlackKeys: 35,
  neutralMilkHotel: 94,
  beck: 88,
  theStrokes: 61,
  wilco: 111,
};

const obj2arr = (obj) => {
  const arr = [];
  for (const key in obj) {
    arr.push({ key: key, value: obj[key] });
  }
  return arr;
};

const arr = obj2arr(playList);
// console.log(arr.sort((a, b) => a.value - b.value));

const nums = Object.values(playList);
console.log(nums);
