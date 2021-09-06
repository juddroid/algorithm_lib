const countdown = (i) => {
  console.log(i);
  if (i <= 1) return;
  else countdown(i - 1);
};

// console.log(countdown(5));

const factorial = (i) => {
  if (i === 1) return 1;
  else return i * factorial(i - 1);
};

console.log(factorial(5));
