const getList = (num) =>
  new Array(num).fill(0).map((el, idx) => (el = idx + 1));

const list = getList(100);
const x = 21;

const binarySearch = (list, x) => {
  let low = 0;
  let high = list.length - 1;
  let divide, mid;
  let count = 0;

  while (low <= high) {
    count++;
    divide = (low + high) / 2;
    mid = (low + high) % 2 === 0 ? divide : Math.floor(divide);
    guess = list[mid];

    if (guess === x) return count;
    guess > x ? (high = mid - 1) : (low = mid + 1);
  }

  return -1;
};

const result = binarySearch(list, x);
console.log(result);
