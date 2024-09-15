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
  // TO DO
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
  // TO DO

  let arrayP = []

  let p1 = new Promise((resolve, reject) => {
    resolve('E-39-1');
  });

  arrayP.push(p1)

  let p2 = new Promise((resolve, reject) => {
    resolve('E-39-2');
  });

  arrayP.push(p2)

  let p3 = new Promise((resolve, reject) => {
    resolve('E-39-3');
  });

  arrayP.push(p3)

  return arrayP
};

/**
 * Write a function that receives an argument 'n', and returns an array of
 * N promises that each resolve to 'E-39-${N}' respectively
 */
export const practice4 = n => {
  // TODO

  let arrayP = []

  for (let i = 0; i < n; i++) {
    arrayP.push(new Promise((resolve, reject) => {
      resolve(`E-39-${i}`)
    }))
  }

  return arrayP

};

/**
 * Write a function that receives a single character and returns a Promise that:
 * if the input is undefined or length different than 1, reject immediately with 'error
 * if the character is a number, resolves after 1 second to 'number'
 * if the character is a vowel, resolves after 2 seconds to 'vowel'
 * else resolves after 3 seconds to 'consonant'
 */
export const practice5 = c => {
  // TODO
  return new Promise((resolve, reject) => {

    if (typeof c === 'undefined') {
      reject('error')
    }

    if (c.toString().length != 1) {
      reject('error')
    }

    if (c >= 0 && c <= 9) {
      setTimeout(() => {
        resolve('number');
      }, 1000);
    }

    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
      setTimeout(() => {
        resolve('vowel');
      }, 2000);
    } else {
      setTimeout(() => {
        resolve('consonant');
      }, 3000);
    }
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

  return new Promise((resolve, reject) => {

    if (typeof category === 'undefined') {
      reject('no category')
    }

    if (category === 'explicit') {
      reject('explicit joke')
    } else {
      fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(r => r.json())
        .then(r => {

          console.log(r)

          if (r.categories.includes("explicit")) {
            reject('explicit joke')
          } else {
            r.header = 'safe for E-39'
            resolve(r)
          }
        })

    }

  })

};