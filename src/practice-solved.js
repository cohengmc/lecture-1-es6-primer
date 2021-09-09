import fetch from 'node-fetch';

/**
 * Write a function that returns a Promise that
 * resolves to 'E-39'
 */
export const practice1 = () => {
  return new Promise((resolve, reject) => {
    resolve('E-39');
  });
};

/**
 * Write a function that returns a Promise that
 * waits 3 seconds and then resolves to 'E-39
 */
export const practice2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('E-39');
    }, 3000);
  });
};

/**
 * Write a function that returns an array of 3 promises
 * that each resolve to 'E-39-1', 'E-39-2', 'E-39-3' respectively
 */
export const practice3 = () => {
  return [
    new Promise((resolve, reject) => {
      resolve('E-39-1');
    }),
    new Promise((resolve, reject) => {
      resolve('E-39-2');
    }),
    new Promise((resolve, reject) => {
      resolve('E-39-3');
    }),
  ];
};

/**
 * Write a function that receives an argument 'n', and returns an array of
 * N promises that each resolve to 'E-39-${N}' respectively
 */
export const practice4 = n => {
  const promises = [];
  for (let i = 0; i < n; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        resolve(`E-39-${i}`);
      }),
    );
  }

  return promises;
};

/**
 * Write a function that receives a single character and returns a Promise that:
 * if the input is undefined or length different than 1, reject immediately with 'error
 * if the character is a number, resolves after 1 seecond to 'number'
 * if the character is a vowel, resolves after 2 seconds to 'vowel'
 * else resolves after 3 seconds to 'consonant'
 */
export const practice5 = c => {
  return new Promise((resolve, reject) => {
    if (typeof c === 'undefined' || c === null) {
      reject('error');
    }

    const t = parseFloat(c);
    let res = 'number';
    let time = 1;

    if (isNaN(t)) {
      if (c.length !== 1) {
        reject('error');
      } else if (['a', 'e', 'i', 'o', 'u'].includes(c)) {
        res = 'vowel';
        time = 2;
      } else {
        res = 'consonant';
        time = 3;
      }
    }

    setTimeout(() => {
      resolve(res);
    }, time * 1000);
  });
};

/**
 * Write a function that receives a string category and:
 *
 * - if the category = 'explicit' reject to 'explicit joke'
 * - if the category is not provided, reject to 'no category'
 * - else retrieves a random Chuck Norris joke and:
 *  - if the returned joke includes the category 'explicit', reject to 'explicit joke'
 *  - else returns a Promise that resolves to the joke, plus a
 *    header = 'safe for E-39'
 *
 * API: https://api.chucknorris.io/jokes/random
 */
export const practice6 = category => {
  if (category === 'explicit') return Promise.reject('explicit joke');
  else if (!category) return Promise.reject('no category');

  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(res => res.json())
    .then(res => {
      return new Promise((resolve, reject) => {
        if (res.categories.includes('explicit')) {
          reject('explicit joke');
        } else {
          resolve({
            header: 'safe for E-39',
            ...res,
          });
        }
      });
    });
};
