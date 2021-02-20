const arr = [1, 2, 3, 4, 5];

const reduced = arr.reduce((acc, curr, currIndex, arr) => {
  if (curr % 2 === 0) {
    return [...acc, `${curr} is even`];
  } else {
    return acc;
  }
}, []);

console.log(reduced);
